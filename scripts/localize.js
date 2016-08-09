var geolocationModule = (function () {
    'use strict';

    var user = {};
    var multisiteDealers;
    var localizedDealers;
    var countries;



    /**
    *
    */
    var _getUserLocation = function () {

        var dfd = new $.Deferred();

        // Restore previous detected user data
        if ($.cookie('user')) {
            user = $.cookie('user');
        }

        // Get user location (country, city, etc...) using a web-service
        if (user.location) {
            dfd.resolve();
        } else {
            $.getJSON('http://www.telize.com/geoip', function (result) {
                if (result.country_code) {
                    user.location = result;
                    console.log('Location detection: ' + JSON.stringify(user.location));
                    dfd.resolve();
                }
            })
        }

        return dfd;

    };



    /**
    *
    */
    function _localizeDealers(linksSelector, urlList) {

        var dealers = {};
        var $link;
        var countryCode = user.location.country_code.toUpperCase();

        $(linksSelector).each(function () {

            $link = $(this);
            var url = this.href;
            var host = this.hostname;
            var queryString = this.search;
            var tld = host.match(/(\.[a-z]{2,3})?(\.[a-z]{2,3})$/g);

            var filters = {};
            var similar = '';
            var pattern = '';
            var replacement = '';

            // Check if the dealer have several websites
            $.each(multisiteDealers, function (key, array) {
                if (url.match(new RegExp(array['pattern'], 'g'))) {
                    similar = array.similar;
                    pattern = array.pattern;
                    replacement = array.replacement;
                    return -1;
                }
            });

            // If the dealer have several websites, create an url for each local shop
            if (pattern && replacement) {
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
                            $link.attr('href', dealers[localHost].url);
                            $link.text(dealers[localHost].name);
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

                }
            }

            // Use custom name or remove www.
            //var name = trim(get_sub_field('text'));
            //dealers[host]['name'] = (name) ? name : parse_url(name, PHP_URL_HOST).replace(/^www\./g, '');

        });

    };



    $.when(
        $.getJSON('assets/json/multisiteDealers.json', function (json) {
            multisiteDealers = json;
        }),
        $.getJSON('assets/json/localizedDealers.json', function (json) {
            localizedDealers = json;
        }),
        $.getJSON('assets/json/countries.json', function (json) {
            countries = json;
        }),
        _getUserLocation()
    ).done(function () {

        $(function () {
            _localizeDealers('.post-content a');
        });

    });

})();
