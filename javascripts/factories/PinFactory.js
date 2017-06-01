<<<<<<< HEAD
app.factory("PinFactory",function($q ,$http,FIREBASE_CONFIG){
	let getPinsList = (boardId) =>{
		let pins = [];
		return new $q ((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
			.then((fbItems)=>{
				let pinsCollection = fbItems.data;
				console.log("fbItems.data",fbItems.data);
				if (pinsCollection !== null){
					Object.keys(pinsCollection).forEach((key) => {
                            pinsCollection[key].id = key;
                            pins.push(pinsCollection[key]);
                        });
				}
				resolve(fbIems.data);
				console.log("pins in getPinsList",pins);
			})
			.catch((error)=>{
				 reject(error);
				console.log("error in getPinsList ",error);
			});
		});
	};


	let postNewPin = (newPin) => {
=======
app.factory("PinFactory", function($http, $q, FIREBASE_CONFIG) {

let getPinList = () => {
    let pinz = [];
    return $q((resolve, reject) => {
        $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json`)
            .then((fbItems) => {
                var pinCollection = fbItems.data;
                if (pinCollection !== null) {
                    Object.keys(pinCollection).forEach((key) => {
                        pinCollection[key].id = key;
                        pinz.push(pinCollection[key]);
                    });
                }
                resolve(pinz);
            }).catch((error) => {
                reject(error);

            });
    });
};


	let deletz = (pinId) => {
>>>>>>> 3f06c419a20005fec444cfc3b0da0f3754428976
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in deletz",error);
                });
        });
    };


    let postNewPin = (newPin) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify(newPin))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
<<<<<<< HEAD
                    console.log("error in delete pins",error);
=======
                    console.log("error in postNewPin",error);
>>>>>>> 3f06c419a20005fec444cfc3b0da0f3754428976
                });
        });
    };



    return {getPinList: getPinList ,deletz:deletz ,postNewPin:postNewPin};

});