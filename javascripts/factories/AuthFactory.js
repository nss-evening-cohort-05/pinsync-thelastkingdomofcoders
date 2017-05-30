app.factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG){

	let currentUserData = null;

	let isAuthenticated = () => {
		return firebase.auth().currentUser ? true : false;
	};

	let getUser = () =>{
		return firebase.auth().currentUser;
	};

	let logout = () =>{
		firebase.auth().signOut();
	};

	let authenticate = (credentials) =>{
		return $q((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
			.then((results) =>{
				resolve(results);
			}).catch((error) =>{
				reject(error);
			});
		});
	};

	let registerWithEmail = (user) =>{
		return $q((resolve, reject) =>{
			firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
			.then((results) =>{
				resolve(results);
			}).catch((error) =>{
				reject(error);
			});
		});
	};

	return {isAuthenticated: isAuthenticated, getUser: getUser, logout: logout, authenticate: authenticate, registerWithEmail: registerWithEmail};

});