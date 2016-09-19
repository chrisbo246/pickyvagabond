var selectionsModule = (function () {
    'use strict';

    var $selectionFilter,
        $items,
        $reset;



    /**
    * Filter items using selected values
    */
    var filterSelection = function ($visibleItems) {

        var $input = $selectionFilter;
        //if (!$input) {
        //    return $visibleItems;
        //}

        if (!$input || $input.is(':checked')) {
            //$visibleItems = $visibleItems.has('input[type="checkbox"]:checked')
            var $item, key;

            $visibleItems.each(function () {
                $item = $(this);

                // Check if a local storage key match one of data attributs
                $.each($item.data(), function (k, values) {
                    values.split(' ').forEach(function (v) {
                        key = k + '.' + v;
                        if (localStorage[key] && localStorage[key] === 'checked') {
                            $item = null;
                            return false;
                        }
                    });
                });

                if ($item) {
                    $visibleItems = $visibleItems.not($item);
                }

            });

        }

        return $visibleItems;

    };



    /**
    * Init selection filter
    */
    var initSelectionFilter = function () {

        var $input = $selectionFilter;
        if (!$input) {
            filterItems();
            return false;
        }

        // Save the default value in a data attribute
        var value = $input.prop('checked');
        $input.attr('data-default', value);

        // When the selection filter change, display matching posts
        $input.on('change', function () {
            console.log('Selection filter changed');
            filterItems();
        });

        // Restore the previous state
        $input.garlic({
            getPath: function ($elem) {
                return $elem.attr('name');
            },
            onRetrieve: function (elem, retrievedValue) {
                console.log('Selection filter retrieved', retrievedValue);
                filterItems();
            }
        });

    };



    /**
    * Restore every filter values
    */
    var reset = function () {

        var value;

        var $input = $selectionFilter;
        if ($input) {
            value = $input.data('default');
            $input.prop('checked', value);
        }

        //filterItems();

    };



    /**
    * Filter items using selected values
    */
    var filterItems = function () {

        var $visibleItems = $items;

        //$visibleItems.hide();
        //$visibleItems.css('opacity', 0.2);
        $visibleItems = filterSelection($visibleItems);
        //$visibleItems.show();
        //$visibleItems.css('opacity', 1);

        $items.not($visibleItems).addClass('fadded');
        $visibleItems.removeClass('fadded');

    };



    $(function() {

        $reset = $('.filter-reset');
        $selectionFilter = $('.selection-filter');
        $items = $('.selection-item');

        // Give items input an explicit local storage key
        if ($items) {
            var $inputs = $items.find('input[type="checkbox"]');
            $inputs.garlic({
                getPath: function ($elem) {
                    return $elem.attr('name');
                }
            });
        }

        initSelectionFilter();

        // Init reset button
        $reset.on('click', function () {
            reset();
        });

    });

})();
