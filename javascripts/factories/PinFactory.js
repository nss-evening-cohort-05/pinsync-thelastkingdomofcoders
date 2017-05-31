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

    return {getPinList: getPinList};

});