var mainModule = (function () {
    /*eslint-enable no-unused-vars*/
    'use strict';

    $(function() {

        // Advanced select
        $(".select2, .filter").select2({
            theme: 'bootstrap'
        });

        // Destroy local storage
        var $button = $('.destroy-local-storage');
        $button.on('click', function () {
            localStorage.clear();
            location.reload();
        });

        // Back to top link
        var $link = $('a[href="#top"]').last();
        if ($link) {
            $(window).on('resize', function () {
                if (($(window).height() + 100) < $(document).height()) {
                    $link.removeClass('hidden');
                } else {
                    $link.addClass('hidden');
                }
            }).trigger('resize');
            $link.on('click', function () {
                $('html, body').animate({scrollTop: 0}, 'slow');
            });
        }

        // Smooth scroll
        $('a[href*="#"]:not([href="#"]):not([data-toggle])').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        // Localize dealer links using user country
        var $input = $('#user_country_code');
        if ($input) {

            var countryCode;
            var linksSelector = '.dealer';

            // Update dealer links when the country change
            $input.on('change', function () {
                countryCode = $(this).val();
                dealerLocalizerModule.localize(linksSelector, countryCode);
                console.log('Country changed', countryCode);
            });

            // Update dealer links when the country is restored from the local storage
            $input.garlic({
                onRetrieve: function (elem, retrievedValue) {
                    countryCode = retrievedValue;
                    dealerLocalizerModule.localize(linksSelector, countryCode);
                    console.log('Country retrieved', countryCode);
                }
            });

            // Try a geolocation if the country value is empty
            if (!$input.val()) {
                $.ajax({
                    url: '//freegeoip.net/json/',
                    type: 'POST',
                    dataType: 'jsonp',
                    success: function(location) {
                        console.log('Freegeoip.net geolocation returned', location);
                        countryCode = location.country_code.toUpperCase();
                        $input.val(countryCode).trigger('change');
                    },
                    error: function () {
                        console.warn('Freegeoip.net geolocation failed');
                        $('#settings').modal('show');
                    }
                });
            }

        }

        // Affix filter box in sidebar
        /*
        var $affix = $('#affix_sidebar');
        var $container = $affix.parent();
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

            var resizeAffix = function() {
                $affix.width($container.width());
            };
            $(window).resize(resizeAffix);

            $(document.body).scrollspy({
            	target: $affix.attr('id'),
            	offset: $('.navbar').outerHeight(true) + 10
            });
        }
        */

        /*
        var offset = 70;

        // Function to handle affix width and classes in affix menu on page loading, scrolling or resizing
        function affix() {

            // Fit affix width to its parent's width
            var $affixElement = $('div[data-spy="affix"]');
            $affixElement.width($affixElement.parent().width());

            // Position of vertical scrollbar
            var position = $(window).scrollTop();
            if (position >= offset) {
                $('.wrapper .section').each(function(i) {
                    // Current content block's position less body padding
                    var current = $(this).offset().top - offset - 1;
                    // Add active class to corresponding affix menu while removing the same from siblings as per position) of current block
                    if (current <= position) {
                        $('a', $affixElement).eq(i).addClass('active').siblings().removeClass('active');
                    }
                });
            } else {
                $('a', $affixElement).find('.active').removeClass('active').end().find(":first").addClass('active');
            }
        };

        // Call to function on DOM ready
        affix();

        // Call on scroll or resize
      	$(window).on('scroll resize', function() {
            affix();
        });
        */

    });

})();
