app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory){
	$scope.alerts = [];
	$scope.boards =[];

	$scope.auth = {
		email:"d@d.com",
    	password:"123456"
	};


	if($location.path() === '/logout'){
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url('/auth');
	}

	let logMeIn = () => {
		AuthFactory.authenticate($scope.auth).then((userCreds)=>{
			// console.log("userCreds in logme in ", userCreds);
			return UserFactory.getUser(userCreds.uid);
		}, (error)=>{
			$scope.alerts.push({msg: error.message});
			console.log("authenticate error", error);
		}).then((user) =>{
			$rootScope.user = user;
			console.log("user",user);
			// $scope.boards = boards;
			$rootScope.user.uid;
			// $rootScope.boardId = boards.boardId  ;
			$location.url('/home');
		}).catch((error) => {
			console.log("getUser error", error);
		});
	};

	$scope.registerUser = () =>{
		//create new auth
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) =>{
			console.log("didRegister", didRegister);
		//adding username
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => { //this is another way of writing a catch when you have multiple thens
			console.log("registerWithEmail error", error);
		}).then((registerComplete) =>{
			logMeIn();
		}).catch((error) =>{
			console.log("addUser error", error);
		});

		//login	
	};

	$scope.loginUser = () =>{
		logMeIn();
	};

});