angular.module('starter.services', [])

.factory('Friends', function($http, $q) {

  var deffered = $q.defer(); // some magic 
  var friends = [];
  var Friends = {};

  Friends.async = function() {
    $http.get('http://rosesart.ro/webservice_produse.php').success(function(d) {
      friends = d;
      deffered.resolve();
    });
    return deffered.promise;
  };
  Friends.all = function() {
    return friends;
  };
 
  Friends.get = function(id) {
    return friends[id];
  };

  return Friends; 

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
    }
  }
});
 