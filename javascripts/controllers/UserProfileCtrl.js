app.controller("UserProfileCtrl", function($routeParams, $rootScope, $scope, UserFactory, BoardFactory, PinFactory) {
    $scope.boards = [];
    console.log("hi ViewBoardsProfileCtrl.js");

    let getAllBoards = () => {
        BoardFactory.displayUserBoards($rootScope.user.uid)
            .then((boardz) => {
                console.log("results boards", boardz);
                $scope.boards = boardz;
            }).catch((error) => {
                console.log("error", error);
            });
    };
    getAllBoards();
});