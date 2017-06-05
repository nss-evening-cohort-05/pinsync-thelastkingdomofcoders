app.factory("BoardFactory", function($http, $q, FIREBASE_CONFIG) {
    console.log("inside the BoardFactory app.factory");

    let displayUserBoards = (userId) => {
        let boardz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
                .then((fbItems) => {
                    var boardsCollection = fbItems.data;
                    if (boardsCollection !== null) {
                        Object.keys(boardsCollection).forEach((key) => {
                            boardsCollection[key].id = key;
                            boardz.push(boardsCollection[key]);
                        });
                    }
                    resolve(boardz);
                }).catch((error) => {
                    console.log("error in viewBoards", error);
                });

        });
    };

    let postNewBoard = (newBoard) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard))
                .then((newBoardResults) => {
                    resolve(newBoardResults);
                    console.log("newBoardResults", newBoardResults);
                }).catch((error) => {
                    reject("postNewBoard error", error);
                });
        });

    };
  

    let deletzBoard = (id) => {
            return $q((resolve, reject) => {
                $http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${id}.json`)
                    .then((resultz) => {
                        resolve(resultz);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        };



    return {postNewBoard: postNewBoard, displayUserBoards: displayUserBoards, deletzBoard: deletzBoard};


});