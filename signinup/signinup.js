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
      resolve: {
        "check" :function( $location, $rootScope){
          if( ! $rootScope.loggedIn){
            $location.path('/');
          }
        }
      },
			templateUrl: 'dashboard.html'
			
		})
    .when('/check', {
      resolve: {
        "check" :function( $location, $rootScope){
          if( ! $rootScope.signedIn){
            $location.path('/');
          }
        }
      },
			templateUrl: 'welcome.html',
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


app.controller('loginCtrl', function($scope, $location, $rootScope,$http){

  // $scope.data = {};


  $scope.submit = function(){
    var uname = $scope.username ;
    var pass = $scope.password ;
    console.log(uname,pass);

    console.log($location.absUrl());
    if( uname ==  'babu@gmail' && pass== '2'){
        $rootScope.loggedIn = true ;
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

    $rootScope.signedIn = true ;

    $location.path('/check');
    // 19 votes
    var data = $scope.param({
      shop_owner : JSON.stringify({
          name: uname,
          email : email,
          country : country,
          phone : phone,
          pass : pass 
      })
    });

    $http.post("/api/new_user/", data).success(function(data, status) {
      console.log('Data posted successfully');
    })


    // another approach - 4 votes
    // console.log('clicked submit');
    // $http({
    //     url: 'http://localhost:8080/blah',
    //     method: 'POST',
    //     data: $scope.data
    // }).then(function (httpResponse) {
    //     console.log('response:', httpResponse);
    // })

    // var url = $location.url('/check');
    console.log($location.absUrl());
  };


});
