var wikipediaModule = (function () {
    /*eslint-enable no-unused-vars*/
    'use strict';


    /**
    * Extract a Wikipedia page
    */
    var loadData = function (url) {

        var page = url.replace(/^https?:\/\/.*wikipedia\.org\/wiki\/([^\/]+).*$/, '$1');
        var requestUrl = 'http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=' + page + '&callback=?';

        return $.ajax({
            type: 'GET',
            url: requestUrl,
            contentType: 'application/json; charset=utf-8',
            async: true,
            dataType: 'json',
            success: function (data, textStatus, jqXHR) {
                console.log('Wikipedia request done', requestUrl);
            },
            error: function (errorMessage) {
                console.log('Wikipedia request failed', requestUrl);
            }
        });

    };



    /**
    * Parse data and insert content in a block
    */
    var buildHtml = function (data, url) {

        var markup = data.parse.text["*"];
        var blurb = $('<div></div>').html(markup);

        // Remove info box
        //blurb.find('.metadata').remove();

        // Pull data table to the right and remove caption
        //blurb.find('.infobox').addClass('pull-right');
        //blurb.find('.infobox').find('caption').remove();

        // Fix links
        var href;
        var domain = url.replace(/\/wiki\/([^\/]+).*$/, '');
        blurb.find('a').each(function() {
            href = $(this).attr('href').replace(/^(\/)/, domain + '$1');
            $(this).attr('href', href);
        });

        //$(blurb).find('p');
        return $(blurb);

    };



    $(function() {

        var $blocks = $('[data-wikipedia-url]');
        $blocks.each(function () {
            var $block = $(this);
            var url = $block.data('wikipedia-url');
            console.log('Wikipedia container found with URL', url);
            if (url) {
                loadData(url).done(function (data) {
                    var html = buildHtml(data, url);
                    $block.html(html);
                });
            }
        });

    });

})();
