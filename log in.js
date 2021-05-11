var app = angular.module("loginApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    //inject $locationProvider service
    $locationProvider.hashPrefix(''); 
    // add configuration
	$routeProvider
		.when('/', {
			templateUrl: 'login.html',
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
	// $locationProvider.html5Mode(true);
});


app.controller('loginCtrl', function($scope, $location){
    $scope.submit = function(){
        var uname = $scope.username ;
        var pass = $scope.password ;
        console.log(uname,pass);

		console.log($location.absUrl());
        if( uname ==  '1' && pass== '2'){
            $location.path('/dash');
			console.log($location.absUrl());
        }else{
            alert('Wrong Username or Password. Please try again!');
        }
    };

	$scope.register = function(){
        console.log( `hi`);
		console.log($location.absUrl());
		var url = $location.url('/sign');
        // $location.replace(); 
		console.log($location.absUrl());
		// $scope.$apply(register) ;
		// $timeout(function() {
            
        // });
    };

});


