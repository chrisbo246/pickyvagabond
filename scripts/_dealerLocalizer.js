var dealerLocalizerModule = (function () {
    'use strict';

    var baseurl = window.baseurl;
    var multisiteDealers;
    var localizedDealers;
    var countries;
    var ready;




    /**
    *
    */
    function localizeDealers(linksSelector, countryCode) {

        var dealers = {};
        var $link;

        $(linksSelector).each(function () {

            $link = $(this);
            var url = this.href;
            var host = this.hostname;
            var queryString = this.search;
            var tld = host.match(/(\.[a-z]{2,3})?(\.[a-z]{2,3})$/g);

            console.log('Found dealer link', url);

            var filters = {};
            var similar = '';
            var pattern = '';
            var replacement = '';

            // First save the link href in a data attribut
            if (!$link.has('[data-href]')) {
                $link.attr('data-href', $link.attr('href'));
                $link.attr('data-html', $link.html());
            }

            // Check if the dealer have several websites
            $.each(multisiteDealers, function (key, array) {
                if (url.match(new RegExp(array['pattern'], 'g'))) {
                    similar = array.similar;
                    pattern = array.pattern;
                    replacement = array.replacement;
                    console.log('Multisite dealer', similar, pattern, replacement);
                    return false;
                }
            });

            // If the dealer have several websites, create an url for each local shop
            if (similar && pattern && replacement) {
                $.each(localizedDealers, function (localHost, localDealer) {

                    if (localHost.match(new RegExp(similar, 'g'))) {

                        // Only if local dealer cover user country // && localHost != host
                        if (!dealers[localHost] && (localDealer['bestShippingAreas'] && $.inArray(countryCode, localDealer['bestShippingAreas']) !== -1)) {

                            //console.info(countryCode + ' country code found in bestShippingAreas > ' + localHost + ': ' + JSON.stringify(localDealer));

                            //Create a local url using the given pattern
                            var localUrl = url.replace(new RegExp(host, 'g'), localHost);
                            var localUrl = localUrl.replace(new RegExp(pattern, 'g'), replacement);

                            // Add affiliation parameters to query string
                            if (localDealer['queryString']) {
                                localUrl = localUrl + ((queryString) ? '&' : '?') + localDealer['queryString'];
                            }

                            dealers[localHost] = {
                                'name': localHost.replace(/^www\./g, ''),
                                'url': localUrl,
                                //'shipping_area_key': shippingAreaKey,
                                //'shipping_area_name': shippingAreaName,
                                'filters': filters
                            };

                            //$link.attr('href', dealers[localHost].url);
                            //$link.html(dealers[localHost].name);
                            console.log(localHost, 'stores', dealers[localHost]);

                        }

                    }
                });
            }


            // Display this dealer only if
            // - This dealer is know to supply to user country
            // - Or if the domain tld match user country
            // - Or if user country is undefined
            if (!dealers[host]) {

                // Print only local dealers
                // If the dealer is know && ship to user country (or worldwide)
                // or if the tld is not .com but match the country tld
                if (!countryCode || (localizedDealers[host] && (!localizedDealers[host]['bestShippingAreas'] || $.inArray(countryCode, localizedDealers[host]['bestShippingAreas']) !== -1)) || (!localizedDealers[host] && (countries[countryCode] && countries[countryCode]['tld'] == tld)) || $.inArray(tld, ['.com']) !== -1) {
                    dealers[host] = {
                        'name': host.replace(/^www\./g, ''),
                        'url': url,
                        //'shipping_area_key': shippingAreaKey,
                        //'shipping_area_name': shippingAreaName,
                        'filters': filters
                    };
                    $link.attr('href', dealers[host].url);
                    $link.html(dealers[localHost].name);
                    console.log(host, 'link updated', dealers[host].url);

                } else {
                    // Restore the original href / text
                    $link.attr('href', $link.data('default-href'));
                    $link.html($link.data('default-html'));
                    console.log(host, 'link restored', $link.data());
                }

            }

        });

    };



    /**
    * Localize links
    */
    var localize = function (linksSelector, countryCode) {
        $.when(ready).done(function () {

            // Save the link URL / title to a data attribut
            var $links = $(linksSelector);
            if ($links) {
                var $link, url, html;
                $links.each(function () {
                    $link = $(this);
                    if (!$link.data('default-href') && !$link.data('default-html')) {
                        $link.attr('data-default-href', $link.attr('href'));
                        $link.attr('data-default-html', $link.html());
                    }
                });
            }

            localizeDealers(linksSelector, countryCode);

        });
    };



    /**
    * Load JSON data
    */
    var loadData = function () {

        return $.when(
            $.getJSON(baseurl + '/assets/json/multisiteDealers.json', function (json) {
                multisiteDealers = json;
                console.log('Loaded', 'multisiteDealers.json');
            }),
            $.getJSON(baseurl + '/assets/json/localizedDealers.json', function (json) {
                localizedDealers = json;
                console.log('Loaded', 'localizedDealers.json');
            }),
            $.getJSON(baseurl + '/assets/json/countries.json', function (json) {
                countries = json;
                console.log('Loaded', 'countries.json');
            })
        );

    };



    // Load data imediatly
    ready = loadData();



    return {
        localize: localize
    }

})();
