angular.module('starter.services', [])

.factory('Products', function($http, $q) {

  var deffered = $q.defer(); // some magic 
  var products = [];
  var Products = {};

  Products.async = function() {
    $http.get('http://rosesart.ro/webservice_produse.php').success(function(d) {
      products = d;
      deffered.resolve();
    });
    return deffered.promise;
  };
  Products.all = function() {
    return products;
  };
 
  Products.get = function(id) {
    return products[id];
  };

  return Products; 

}).

factory('Cart', function(){

  var products = [];

  return {
    get: function() {
      return products;
    },
    add: function(product){
      products.push(product);
    },
    total: function() {
      var total = 0;
      products.forEach(function(product){
        total += parseInt(product.pret_total); 
      });
      return total;
    },
    cancel : function() {
      products = [];
    },
    order: function() {
      // TODO: acces websservice to place order
    }
  }
});
 