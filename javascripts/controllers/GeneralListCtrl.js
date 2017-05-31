app.controller("GeneralListCtrl", function($rootScope, $scope, PinFactory) {
	$scope.pins = [];

	let getPins =()=>{
		PinFactory.getPinsList()
		.then((pinz)=>{
			$scope.pins = pinz;
		})
		.catch((error)=>{
            console.log("error in getPins", error);
		});
	};

	getPins();





});