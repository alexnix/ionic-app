angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Cart) {
  $scope.cart = Cart.get();
  $scope.total = Cart.total();
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
