app.factory("PinFactory",function($q ,$http,FIREBASE_CONFIG){
	let getPinsList = (userId) =>{
		let pins = [];
		return new $q ((resolve,reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="uid"&equalTo="${userId}"`)
			.then((fbItems)=>{
				let pinsCollection = fbItems.data;
				if (pinsCollection !== null){
					Object.keys(pinsCollection).forEach((key) => {
                            pinsCollection[key].id = key;
                            pins.push(pinsCollection[key]);
                        });
				}
				resolve(pins);
				console.log("pins in getPinsList",pins);
			})
			.catch((error)=>{
				reject(error);
				console.log("error in getPinsList ",error);
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
                    console.log("error in postNewPin",error);
                });
        });
    };


    let deletz = (pinId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in delet pins",error);
                });
        });
    };


    let editPin = (item) => {
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${pin.id}.json`, JSON.stringify({
                    uid: pins.uid,
                    boardId: pins.boardId,
                    url: pins.url,
                    title:pins.title
                })).then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                    console.log("error in editPin ",error);
                });
        });
    };


	return { getPinsList:getPinsList ,postNewPin:postNewPin ,deletz:deletz ,editPin:editPin};
});