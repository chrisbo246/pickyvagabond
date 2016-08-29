var filtersModule = (function () {
    'use strict';

    var data = {},
    $reset,
    $filters,
    $selectionFilter,
    $items;



    /**
     * Filter items using selected values
     */
    var filter = function () {

        var $input, filter, values;
        var selector = '';

        $filters.each(function () {
            $input = $(this);
            filter = $input.data('filter');
            values = $input.val();

            if (values && filter) {
                if (!$.isArray(values)) {
                    values = [values];
                }
                values.forEach(function (value) {
                    selector = selector + '[data-' + filter + '~="' + value + '"]';
                });
            }

        });

        var $visibleItems = $items;
        $visibleItems.hide();
        if (selector !== '') {
            $visibleItems = $visibleItems.filter(selector);
        }
        if ($selectionFilter.is(':checked')) {
            $visibleItems = $visibleItems.has('input[type="checkbox"]:checked')
        }
        $visibleItems.show();
        console.log('Filtered', selector);

    };



    /**
     * Restore every filter values
     */
    var reset = function () {

        var $input, value;

        $filters.each(function () {
            $input = $(this);
            value = $input.data('default');
            $input.val(value).trigger('change');
        });

        $input = $selectionFilter;
        value = $input.data('default');
        $input.prop('checked', value);

        //filter();

    };



    $(function() {

        $reset = $('.filter-reset');
        $filters = $('.filter'); //.filter('[data-filter]');
        $selectionFilter = $('.selection-filter');
        $items = $('.filter-item');

        // Save filters default values
        var $input, value;
        $filters.each(function () {
            $input = $(this);
            value = $input.val();
            $input.attr('data-default', value);
        });
        $input = $selectionFilter;
        value = $input.prop('checked');
        $input.attr('data-default', value);

        // When a collection filter change, display matching posts
        $filters.on('change', function () {
            filter();
        });

        // When the selection filter change, display matching posts
        $selectionFilter.on('change', function () {
            filter();
        });

        // Reset button
        $reset.on('click', function () {
            reset();
        });

    });

})();
