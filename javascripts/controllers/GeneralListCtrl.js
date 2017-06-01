app.controller("GeneralListCtrl", function($rootScope, $scope, PinFactory) {
	$scope.pin = {};

<<<<<<< HEAD
	let getPins =()=>{
		PinFactory.getPinsList()
		.then((pinz)=>{
=======
let getAllPins = () => {
		PinFactory.getPinList()
		.then((pinz) => {
>>>>>>> 3f06c419a20005fec444cfc3b0da0f3754428976
			$scope.pins = pinz;
		}).catch((error)=>{
       console.log("error in getPins", error);
		});
	};

	getAllPins();

	$scope.deleteSinglePin = (id)=>{
		PinFactory.deletz(id)
		.then(()=>{
			getAllPins();
		})
		.catch((error)=>{
			console.log("error in deleteSinglePin",error);
		})
	};


});