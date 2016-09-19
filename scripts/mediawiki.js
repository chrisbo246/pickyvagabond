/**
 * Embed a mediawiki page
 * @module
 * @see https://www.mediawiki.org/wiki/API:Main_page/
 */
var mediawikiModule = (function () {
    /*eslint-enable no-unused-vars*/
    'use strict';

    /**
    * Retrieve the page sections
    * @param {String} url Mediawiki base URL
    * @param {Object} params Mediawiki request parameters
    * @return {Object} jQuery promise
    */
    var request = function (url, params) {

        params = $.extend({}, {
            action: 'parse',
            format: 'json',
            prop: 'text'
            //origin: document.origin || location.origin
        }, params);

        url = url.replace(/^(https?:\/\/[^\/]+).*$/, '$1/w/api.php');
        //requestUrl = requestUrl + $.param(params);
        //requestUrl = requestUrl + '&callback=?';

        return $.ajax({
            type: 'GET',
            url: url,
            data: params,
            contentType: 'application/json; charset=utf-8',
            async: true,
            dataType: 'jsonp',
            headers: {
                'Api-User-Agent': document.apiUserAgent || location.hostname + '/1.0',
                'Origin': document.origin || location.origin
                //'Content-Type': 'application/json; charset=UTF-8'
            },
            timeout: 5000,
            success: function (data, textStatus, jqXHR) {
                console.log('Mediawiki request', 'done', url);
            },
            error: function (errorMessage) {
                console.warn('Mediawiki request', errorMessage, url);
            }
        });

    };



    /**
    * Extract a Mediawiki page
    * @param {String} url Mediawiki URL
    * @param {Object} params mediawiki request parameters
    * @return {Object} jQuery promise
    */
    var getData = function (url, params) {

        var dfd = new $.Deferred();
        var anchor = url.replace(/^https?:\/\/[^\/]+\/wiki\/[^\/]+[^#]*#?/, '');
        params.page = url.replace(/^https?:\/\/[^\/]+\/wiki\/([^\/\#]+).*$/, '$1');

        if (!params.page) {
            console.warn('Mediawiki URL mismatch', url);
            return false;
        }

        if (params.anchor) {
            params.prop = 'sections';
            request(url, params).done(function () {
                data.parse.sections.forEach(function (section) {
                    if (section.anchor === params.anchor) {
                        params.section = section.number;
                        request(url, params)
                        .done(function (data) {
                            dfd.resolve(data);
                        })
                        .fail(function (errorMessage) {
                            dfd.reject(errorMessage);
                        });
                    }
                });
            });
        } else {
            params.prop = 'text';
            request(url, params)
            .done(function (data) {
                dfd.resolve(data);
            })
            .fail(function (errorMessage) {
                dfd.reject(errorMessage);
            });
        }

        return dfd;

    };



    /**
    * Parse data and insert content in a block
    */
    var buildHtml = function (data, url) {

        if (!data || !data.parse) {
            console.warn('Mediawiki returned no data');
            return false;
        }

        var markup = data.parse.text["*"];
        var blurb = $('<div></div>').html(markup);

        // Remove info box
        //blurb.find('.metadata').remove();

        // Pull data table to the right and remove caption
        //blurb.find('.infobox').addClass('pull-right');
        //blurb.find('.infobox').find('caption').remove();

        // Fix internal links
        //var domain = url.replace(/\/wiki\/([^\/]+).*$/, '');
        var domain = url.replace(/(https?:\/\/[^\/]+).*$/, '$1');
        var $link, href;
        blurb.find('a').each(function() {
            $link = $(this);
            href = $link.attr('href');
            if (href.match('^/')) {
                href = href.replace(/^(\/)/, domain + '$1');
                $link.attr('href', href);
            } else if (!href.match('^#')) {
                href = url + href;
                $link.attr('href', href);
            }
            if (href.match('^https?://')) {
                $link.attr('target', '_blank');
            }
        });

        //$(blurb).find('p');
        return $(blurb);

    };



    $(function() {

        var $blocks = $('.mediawiki-container');
        $blocks.each(function () {
            var $block = $(this);
            var $mention = $block.next('.mediawiki-mention');
            var $excerpt = $('.mediawiki-excerpt');
            var params = $.extend({}, $block.data());
            console.log('Mediawiki container found', params);
            var url = params.url;
            delete params.url;

            if (url) {
                getData(url, params).done(function (data) {
                    var html = buildHtml(data, url);
                    if (html) {
                        $block.html(html).show();
                        if ($mention) {
                            var mention = $block.find('#siteSub').html();
                            if (mention) {
                                mention = mention + ' <a href="' + url + '" target="_blank">' + url + '</a>';
                                $mention.html(mention).show();
                            }
                        }
                        if ($excerpt) {
                            var excerpt = $block.find('p').first().prev().nextUntil('.mw-headline', 'p, ul, ol').html();
                            if (excerpt) {
                                $excerpt.html(excerpt).show();
                            } else {
                                $excerpt.hide();
                            }
                        }
                    } else {
                        $block.hide();
                        $mention.hide();
                        $excerpt.hide();
                    }
                });
            }
        });

    });

})();
