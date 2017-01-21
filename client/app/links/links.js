angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.data = {};
  
  if (!Auth.isAuth()) {
    console.log('IS NOT AUTHORIZED');
    $location.path('/signin');
  } else {
    console.log('AUTHORIZED');
    Links.getAll().then(function(links) {
      $scope.data.links = links;
    });
  }

  $scope.navToLink = function(newUrl) {
    console.log('LINK CONTROLLER CODE:', newUrl);
    Links.navToLink(newUrl);
  };


});
