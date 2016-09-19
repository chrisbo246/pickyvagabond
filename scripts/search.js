var searchModule = (function() {
    'use strict';

    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) { // Are there any results?
            var appendString = '';
            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];
                appendString += '<li>'
                + '<div class="media">'
                + '<div class="media-body">'
                + '<h4>'
                + '<a href="' + item.url + '">' + item.title + '</a>'
                + ' <span class="label label-' + item.collection + '">' + item.collection + '</span>'
                + '</h4>'
                + '<p>' + item.content.substring(0, 150) + ((item.content.length > 150) ? '&#8230;' : '') + '</p>'
                + '</div>'
                + '</media>'
                + '</li>';
            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li>No results found</li>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }


    var searchTerm = getQueryVariable('query');
    var products = getQueryVariable('products');
    var types = getQueryVariable('types');
    var purposes = getQueryVariable('purposes');
    var brands = getQueryVariable('brands');

    if (searchTerm) {

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('content');
            this.field('description');
            this.field('excerpt');
            this.field('alias');
            this.field('types');
            this.field('brands');
            this.field('purposes');
            this.field('products');
        });

        for (var key in window.store) { // Add the data to lunr
            idx.add({
                'id': key,
                'title': window.store[key].title,
                'author': window.store[key].author,
                'category': window.store[key].category,
                'content': window.store[key].content,
                'description': window.store[key].description,
                'excerpt': window.store[key].excerpt,
                'alias': window.store[key].alias,
                'types': window.store[key].types,
                'brands': window.store[key].brands,
                'purposes': window.store[key].purposes,
                'products': window.store[key].products
            });

            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store); // We'll write this in the next section
        }

        var input = document.getElementById('search-box');
        if (input) {
            input.setAttribute("value", searchTerm);
        }

    }

})();
