app.controller("GeneralListCtrl", function($rootScope, $scope, PinFactory) {
	$scope.pins = [];

	let getPins =()=>{
		PinFactory.getPinsList($rootScope.pins.boardId)
		.then((pinz)=>{
			$scope.pins = pinz;
		})
		.catch((error)=>{
            console.log("error in getPins", error);
		});
	};

	getPins();





});