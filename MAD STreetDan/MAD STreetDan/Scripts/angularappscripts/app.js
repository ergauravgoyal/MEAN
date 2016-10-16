var app = angular.module("myApp", []);

app.controller('MainCtrl', ['$scope', '$http', function ($scope,$http) {
    $http.get("https://hackerearth.0x10.info/api/fashion?type=json&query=list_products").then(function (response) {
        $scope.myData = response.data.products;
    });
    $scope.Name="gaurav"
}]);