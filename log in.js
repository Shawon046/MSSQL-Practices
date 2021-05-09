var app = angular.module('loginApp', ['ngRoute']);

// config the path
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'login.html'
    })
    .when('/dashboard',{
        templateUrl : 'dashboard.html'
    })
    .otherwise({
        redirectTo : '/'
    });
});


app.controller('loginCtrl', function($scope, $location){
    $scope.submit = function(){
        var uname = $scope.username ;
        var pass = $scope.password ;
        if( uname == "babu" && pass== "2"){
            $location.path('/dashboard');
        }else{
            alert(`Wrong Username or Password. Please try again!`)
        }
    };

});