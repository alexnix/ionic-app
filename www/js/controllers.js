angular.module('starter.controllers', [])

.controller('CartCtrl', function($scope, Cart) {
  $scope.cart = Cart.get();
  $scope.total = Cart.total();
  $scope.cancel = function() {
  	Cart.cancel();
  	$scope.cart = Cart.get();
  	$scope.total = 0;
  };
  $scope.order = function() {
  	Cart.order();
  };
})

.controller('ShopCtrl', function($scope, Friends) {
  Friends.async().then(function(){
  	$scope.products = Friends.all();
  });
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Friends, Cart) {
  $scope.product = Friends.get($stateParams.productId);

  $scope.addToCart = function() {
  	Cart.add($scope.product);
  };
})

.controller('ContactCtrl', function($scope) {
});
