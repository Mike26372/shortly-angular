angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  if (!Auth.isAuth()) {
    console.log('IS NOT AUTHORIZED');
    // CHECK IF THIS LOCATION CHANGE WORKS
    $location.path('/signin');
  } else {
    console.log('AUTHORIZED');
    $scope.link = {};
    $scope.addLink = function(newLink) {
      Links.addOne(newLink);
      $scope.link.url = '';
    };
  }

});
