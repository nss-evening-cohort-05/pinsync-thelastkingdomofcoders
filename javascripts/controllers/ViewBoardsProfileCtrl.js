app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {
    $scope.boards = [];
    console.log("hi ViewBoardsProfileCtrl.js");
    PinFactory.getBoardOnlyPins($routeParams.boardId).then((results) => {
        console.log("pins boards", results);
    });

});