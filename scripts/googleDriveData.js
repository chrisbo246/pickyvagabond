
var dataModule = (function () {
    'use strict';
        
    var spreadsheets = {},
        data;

    /**
     * Load a spreadsheet a json
     * @param id integer Spreadsheet number
     */
     
    var _loadSpreadsheet = function (id) {
        
        var row;
        
        return $.getJSON('https://spreadsheets.google.com/feeds/list/10xwaA5ycq6vMjiTBxdDUG3oXPBM1GOQNdkJ8Ndeue-s/' + id + '/public/values?alt=json', function(json) {
            console.log('Spreadsheet ' + id + ' loaded');
            spreadsheets[id] = [];
            if (json.feed.entry) {                
                $.each(json.feed.entry, function (k, entry) {
                  row = {};
                  $.each(entry, function (key, value) {
                    if (key.match(/^gsx\$/g)) {
                      row[key.replace(/^gsx\$/g, '')] = value['$t'];
                    }
                  });
                  spreadsheets[id].push(row);
                });
                //console.log('spreadsheets[' + id + '] = ' + JSON.stringify(spreadsheets[id]));
            } else {
                console.warn('Spreadsheet ' + id + ' is empty');
            }
        }).fail(function () {
            console.error('Spreadsheet ' + id + ' load failed');  
        });
        
    }
    


    /**
     * Build products data from spreadsheets
     */
     
    var getData = function () {
        
        var deferred = $.Deferred();
        
        $.when(
          _loadSpreadsheet(1),
          _loadSpreadsheet(2),
          _loadSpreadsheet(3),
          _loadSpreadsheet(4),
          _loadSpreadsheet(5),
          _loadSpreadsheet(6),
          _loadSpreadsheet(7),
          _loadSpreadsheet(8),
          _loadSpreadsheet(9),
          _loadSpreadsheet(10)        
        ).done(function () {
            console.log('Data loaded');
            dataModule.data = {
                products: spreadsheets[1],
                dealers: spreadsheets[2],
                brands: spreadsheets[3],
                types: spreadsheets[4],
                activities: spreadsheets[5],
                functions: spreadsheets[6],
                qualities: spreadsheets[7],
                features: spreadsheets[8],
                users: spreadsheets[9],
                matters: spreadsheets[10]
            };
            $.each(dataModule.data.products, function (i1, product) {
                product.dealers = [];
                // Merge dealers to products
                $.each(spreadsheets[2], function (i2, dealer) {
                    if (product.slug === dealer.productSlug) {
                        product.dealers.push(dealer);
                    }
                });
            });
            deferred.resolve();
        });

        return deferred;
        
    }
    
   
    
    return {
        getData: getData,
        data: data
    };

})();
