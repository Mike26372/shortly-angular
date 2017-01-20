angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

  $scope.navToLink = function(newUrl) {
    console.log('LINK CONTROLLER CODE:', newUrl);
    Links.navToLink(newUrl);
  };

});
