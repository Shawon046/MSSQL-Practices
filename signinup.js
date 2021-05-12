// var module = angular.module('loginApp', []);
// module.controller('loginCtrl', function($scope) {
  
// });

// this segment is added by Shawon
var app = angular.module("loginApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  //inject $locationProvider service
  $locationProvider.hashPrefix(''); 
  // add configuration
	$routeProvider
		.when('/', {
			templateUrl: 'signin-signup.html',
			controller: 'loginCtrl'
		})
		.when('/sign', {
			templateUrl: 'signin-signup.html'
			// controller: 'SecondController'
		})
    .when('/dash', {
			templateUrl: 'dashboard.html'
			// controller: 'SecondController'
		})
    .when('/check', {
			templateUrl: './Login Page/welcome.html',
			// controller: 'SecondController'
		})
		.otherwise({
			redirectTo: '/'
		});
});


app.controller('tabCtrl', function($scope, $location){
  // always shows the "log in" tab first
  $scope.tabName = "tab1"; 
  // console.log($scope);
  

});


app.controller('loginCtrl', function($scope, $location){
  // // always shows the "log in" tab first
  // $scope.tabName = "tab1"; 
  // console.log($scope);

  
  $scope.submit = function(){
    var uname = $scope.username ;
    var pass = $scope.password ;
    console.log(uname,pass);

    console.log($location.absUrl());
    if( uname ==  'babu@gmail' && pass== '2'){
        $location.path('/dash');
        console.log($location.absUrl());
      }else{
        alert('Wrong Username or Password. Please try again!');
      }
  };

  $scope.register = function(){
    console.log( `hi`);
    var uname = $scope.name ;
    var email = $scope.email ;
    var country = $scope.country ;
    var phone = $scope.phone ; 
    var pass = $scope.password ;
    console.log(uname, email, country, phone, pass);
    console.log($location.absUrl());
    var url = $location.url('/check');
    console.log($location.absUrl());
  };


});
