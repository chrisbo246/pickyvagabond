var geolocationModule = (function () {
    'use strict';

    var location;



    /**
    * HTML5 geolocation
    */
    var html5Geolocation = function () {

        var dfd = new $.Deferred();

        if (!countryCode && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log('HTML5 geolocation returned', position);
                dfd.resolve(position);
            });
        } else {
            console.warn('HTML5 geolocation is not supported by this browser.');
            dfd.reject();
        }

        return dfd;
    };


    /**
    * freegeoip.net geolocation
    */
    var freegeoipGeolocation = function () {
        return $.ajax({
            url: '//freegeoip.net/json/',
            type: 'POST',
            dataType: 'jsonp',
            success: function(location) {
                console.log('freegeoip.net geolocation returned', location);
            },
            error: function () {
                console.warn('freegeoip.net geolocation failed');
            }
        });
    };



    /**
    * Try geolocation from various services and return unifomized data
    */
    var geotag = function () {

        var dfd = new $.Deferred();
        location = null;

        html5Geolocation()
        .done(function (json) {
            location = json;
            //location.countryCode = .toUpperCase();
            dfd.resolve(location);
        })
        .fail(function () {
            freegeoipGeolocation()
            .done(function (json) {
                location = json;
                location.countryCode = location.country_code.toUpperCase();
                dfd.resolve(location);
            })
            .fail(function () {
                dfd.reject();
            });
        });

        return dfd;

    };



    return {
        geotag: geotag,
        location: location
    }

})();
