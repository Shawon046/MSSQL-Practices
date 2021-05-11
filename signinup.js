var module = angular.module('myApp', []);
module.controller('MyCtrl', function($scope) {
  $scope.tabName = "tab1"; // always shows the "log in" tab first
});