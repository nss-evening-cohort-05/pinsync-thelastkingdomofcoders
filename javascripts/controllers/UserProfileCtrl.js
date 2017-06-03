app.controller("UserProfileCtrl", function($routeParams, $rootScope, $scope, UserFactory, BoardFactory) {
    $scope.boards = [];
    console.log("hi ViewBoardsProfileCtrl.js");

    let getAllBoards = () => {
        BoardFactory.displayUserBoards()
            .then((boardz) => {
                console.log("results boards", boardz);
                $scope.boards = boardz;
            }).catch((error) => {
                console.log("error", error);
            });
    };
    getAllBoards();
});