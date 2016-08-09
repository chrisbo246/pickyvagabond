var filtersModule = (function () {
    'use strict';

    var data = {};

    console.log('Document ready');

    $('form[data-persist="garlic"]').find(':input').garlic({
        onPersist: function (elem, storedValue) {
            console.log('Persisted', elem, storedValue);
        },
        onRetrieve: function (elem, retrievedValue) {
            console.log('Retrieved', elem, retrievedValue);
        }
    });

    $('#reset_filters').garlic('destroy');

    $(':select').filter('[data-collection]').on('change', function () {
        var $input = $(this);
        var value = $input.val();
        var collection = $input.data('collection');
        var $items = $('.media[data-' + collection + '~="' + value + '"]');
        $items.show();
        $items.not().hide();
    });

})();
