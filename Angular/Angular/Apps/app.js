var app = angular.module("flapperNews", []);
app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.test = "Hello World !";
    $scope.posts = [
        { title: 'post 1', upvotes: 5 },
        { title: 'post 2', upvotes: 9 },
        { title: 'post 3', upvotes: 8 },
        { title: 'post 4', upvotes: 2 }
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
}]);