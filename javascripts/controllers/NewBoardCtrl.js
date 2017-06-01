app.controller("NewBoardCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, BoardFactory){	
	$scope.addNewBoard = () =>{
		$scope.newBoard.uid = $rootScope.user.uid;
		BoardFactory.postNewBoard($scope.newBoard)
		.then((response)=>{
			$scope.newBoard = {};
			$location.url("/newBoard");
			console.log("new board response", response);
		}).catch((error)=>{
			console.log("error in new board response", error);
		});
	};

});

