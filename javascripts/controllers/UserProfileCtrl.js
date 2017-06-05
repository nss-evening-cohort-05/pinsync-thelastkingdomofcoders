app.controller("UserProfileCtrl", function($routeParams, $rootScope, $scope, UserFactory, BoardFactory, PinFactory) {
    $scope.boards = [];
    $scope.pins = [];

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


    $scope.deleteBoard = (boardId) => {

        BoardFactory.deletzBoard(boardId)
            .then(() => {
                getAllBoards();
            })
            .catch((error) => {
                console.log("error on deleteBoard", error);
            });
    };

    // let getUserPins = () => {
    //     PinFactory.displayUserPins($rootScope.user.uid)
    //         .then((pinz) => {
    //             console.log("results pinz", pinz);
    //             $scope.pins = pinz;
    //         }).catch((error) => {
    //             console.log("error", error);
    //         });
    // };
    // getUserPins();

    // PinFactory.displayUserPins($routeParams.id).then((results) => {
    //     $scope.pins = results;
    // }).catch((error) => {
    //     console.log("displayUserPins error", error);
    // });

});