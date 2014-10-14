angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Cart) {
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

.controller('FriendsCtrl', function($scope, Friends) {
  Friends.async().then(function(){
  	$scope.friends = Friends.all();
  });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends, Cart) {
  $scope.friend = Friends.get($stateParams.friendId);

  $scope.addToCart = function() {
  	Cart.add($scope.friend);
  };
})

.controller('AccountCtrl', function($scope) {
});
