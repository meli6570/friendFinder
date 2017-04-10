// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle 
// incoming survey results. This route will also be used to 
// handle the compatibility logic.

var friendsData = require('../data/friends');

// console.log(friendsData);
// console.log(Array.isArray(friendsData));

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){

		var differenceArray = [];
		// var currentUserData = req.body;
		var currentUserScores = req.body.scores;

		for(var i=0; i < friendsData.length; i++){
			var friendsScores = friendsData[i].scores;		
			var sum = 0;
			for(var j=0; j < 10; j++){								
				// console.log(i, "comparing[", currentUserScores[j], friendsScores[j], "]");
				sum += Math.abs(parseInt(currentUserScores[j]) - friendsScores[j]);							
			}
			differenceArray.push({"index" : i, "sum" : sum});
		}
		// console.log("before sorting differenceArray", differenceArray);

		differenceArray.sort(function(a,b){
			return a.sum - b.sum;
		});

		// console.log("differenceArray", differenceArray)	;
		var indexMatched = differenceArray[0].index;
		
		console.log("Friend matched index!", differenceArray[0].index);

		// console.log("differenceArray", differenceArray);
		friendsData.push(req.body);
		
		res.json(friendsData[indexMatched]);		
	});
}