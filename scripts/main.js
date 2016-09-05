var mainModule = (function () {
    /*eslint-enable no-unused-vars*/
    'use strict';

    $(function() {

        // Save and restore form inputs to the local storage
        $('form[data-persist="garlic"]').find(':input').garlic({
            onPersist: function (elem, storedValue) {
                console.log('Persisted', elem, storedValue);
            },
            onRetrieve: function (elem, retrievedValue) {
                console.log('Retrieved', elem, retrievedValue);
            }
        });

        // Advanced select
        $(".select2, .filter").select2({
            theme: 'bootstrap'
        });

        // Destroy local storage button
        $('.destroy-local-storage').garlic('destroy');

        // Back to top link
        var $link = $('a[href="#top"]');
        if ($link) {
            if (($(window).height() + 100) < $(document).height()) {
                $link.removeClass('hidden');
            }
            $link.on('click', function () {
                $('html, body').animate({scrollTop: 0}, 'slow');
            });
        }

        var $countryCode = $('#user_country_code');
        if ($countryCode) {
            if ($().garlic) {
                $countryCode.garlic({
                    onRetrieve: function (elem, retrievedValue) {
                        if (retrievedValue) {
                            dealerLocalizerModule.localize('.dealer', retrievedValue);
                            countryCode = retrievedValue;
                            console.log('Country retrieved', countryCode);
                        } else {
                            geolocationModule.geotag().done(function (position) {
                                countryCode = position.countryCode;
                                $countryCode.val(countryCode);
                            });
                            dealerLocalizerModule.localize('.dealer', position.countryCode);
                        }
                    }
                });
            } else {
                console.warn('GarlicJS plugin is not defined');
            }

            $countryCode.on('change', function () {
                countryCode = $(this).val();
                dealerLocalizerModule.localize('.dealer', countryCode);
                console.log('Country changed', countryCode);
            });
        }

        // Affix filter box in sidebar
        var $affix = $('#sidebar');
        var $container = $affix.parent('div');
        if ($affix && $container) {
            $affix
            .on('affix.bs.affix', function () {
                var margin = parseInt($container.css('margin-right'));
                var padding = parseInt($container.css('padding-right'));
                $affix.css('right', margin + padding);
            })
            .on('affix-top.bs.affix', function () {
                $affix.css('right', '0px');
            });
        }

    });

})();
