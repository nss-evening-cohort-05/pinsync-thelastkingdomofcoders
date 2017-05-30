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
			})
			.catch((error)=>{
				reject(error);
				console.log("error in getPinsList ",error);
			});
		});
	};


	return { getPinsList:getPinsList };
});