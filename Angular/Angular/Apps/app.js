var app = angular.module("flapperNews", ['ui-router']);
app.factory('posts', [function () {
    var o = {
        posts: ["Gaurav Goyal"]
    };
    return o;
}]);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller:'MainCtrl'
    });
    $urlRouterProvider.otherwise('home');
}]);
app.controller('MainCtrl', ['$scope','posts', function ($scope,posts) {
    $scope.test = "Hello World !";
    $scope.varService = posts.posts;
    $scope.posts = [
        { title: 'The Secret', upvotes: 5 },
        { title: 'The 2 States', upvotes: 9 },
        { title: 'My Ambition', upvotes: 8 },
        { title: 'My Path to Sucess', upvotes: 2 }
    ];
    $scope.addPost = function () {
        if (!$scope.title || $scope.title === '') {
            return;
        }
        upvotes = 0;
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });
        $scope.title = "";
        $scope.link = "";

    };

    $scope.incrementUpvotes=function(post) {
        post.upvotes+=1;
    };

    $scope.source = "This demo is created with the help of ";
    $scope.sourceLink = "https://thinkster.io/mean-stack-tutorial";
    alert("varService :" + $scope.varService);
    //

}]);