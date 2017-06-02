
//// Krissy's Console log/////
console.log("BoardFactory");
////////////////////////////
//// Krissy's Code /////

app.factory("BoardFactory", function($q, $http, FIREBASE_CONFIG){
	console.log("inside the BoardFactory app.factory", );
  
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



return {postNewBoard:postNewBoard};


});
