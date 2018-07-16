var app = angular.module("myApp", []);

app.controller("myCtr", function ($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function (item) {  
        $scope.users = item.data;
    })
})