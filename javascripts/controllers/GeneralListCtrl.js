app.controller("GeneralListCtrl", function($rootScope, $scope, PinFactory) {
	$scope.pin = {};

let getAllPins = () => {
		PinFactory.getPinList()
		.then((pinz) => {
			$scope.pins = pinz;
		}).catch((error)=>{
       console.log("error in getPins", error);
		});
	};

	getAllPins();

	$scope.deleteSinglePin = (pin)=>{
		PinFactory.deletPinFromBoard(pin)
		.then(()=>{
			getAllPins();
			console.log("deleteSinglePin");
		})
		.catch((error)=>{
			console.log("error in deleteSinglePin",error);
		});
	};


});