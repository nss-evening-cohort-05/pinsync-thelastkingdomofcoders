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


    let getSinglePin = (id) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${id}.json`)
                .then((resultz) => {
                    resultz.data.id = id;
                    resolve(resultz);
                }).catch((error) => {
                    reject(error);
                    console.log("getSingleItem error", error);
            });
        });
    };

    let editPin = (pin) => {
// I'm thinking that we might need to pass the boardId into edit pin function ??        
        console.log("pin in PinFactory", pin);
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/pins/${pin.id}.json`, 
                JSON.stringify({
                    uid: pin.uid,
                    boardId: pin.boardId,
                    url: pin.url,
                    title: pin.title,
                    description: pin.description
                })  
            ).then((resultz) => {
                resolve(resultz);
            }).catch((error) => {
                console.log("editPin error", error);
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
                    console.log("error in postNewPin",error);
                });
        });
    };



    return {getPinList: getPinList , getSinglePin:getSinglePin ,deletz:deletz ,postNewPin:postNewPin};

});