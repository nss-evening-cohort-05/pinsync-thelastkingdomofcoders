app.factory("BoardFactory", function($q, $http, FIREBASE_CONFIG){
  
  let displayUserBoards = (userId) => {
    let boardz = [];
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((fbItems)=>{
      var boardsCollection = fbItems.data;
        if (boardsCollection !== null) {
          Object.keys(boardsCollection).forEach((key) =>{
            boardsCollection[key].id=key;
            boardz.push(boardsCollection[key]);
          });
        }
      resolve(boardz);
    }).catch((error)=>{
      console.log("error in viewBoards", error);
    });

  });
};

  let postNewBoard = (newBoard) => {
  	return $q ((resolve, reject) => {
  		$http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard))
  		.then((newBoardResults)=>{
  			resolve(newBoardResults);
        console.log("newBoardResults", newBoardResults);
  		}).catch((error)=>{
  			reject("postNewBoard error", error);
  		});
	  });
  };

  let getSingleBoard = (id) => {
      return $q((resolve, reject) => {
          $http.get(`${FIREBASE_CONFIG.databaseURL}/boards/${id}.json`)
              .then((resultz) => {
                  resultz.data.id = id;
                  resolve(resultz);
              }).catch((error) => {
                  reject(error);
                  console.log("getSingleItem error", error);
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

  let editBoard = (board) =>{
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${board.id}.json`,
      JSON.stringify({
        title: board.title
      })
      ).then((resultz) => {
        resolve(resultz);
      }).catch((error) =>{
        reject(error);
      });
    });
  };
    

return {postNewBoard:postNewBoard, displayUserBoards: displayUserBoards, getSingleBoard:getSingleBoard, deletzBoard:deletzBoard, editBoard: editBoard};


});
