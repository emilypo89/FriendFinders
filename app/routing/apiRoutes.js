// API routes


// requires the friends array from the friends.js file
var friends = require("../data/friends.js");


// exports this function 
module.exports = function(app) {


// A GET route for /api/friends which displays a JSON of all friends in the system
	app.get("/api/friends", function(req, res) {
	 		console.log(friends);
	    res.json(friends);
	  
	});

// A POST route for /api/friends for incoming survy results
	app.post("/api/friends", function(req, res) {
	  var newFriend = req.body;

	  console.log(newFriend);
	  // console.log(friends);

	  friends.push(newFriend);


	 // compareScores(newFriend);

	  res.json(newFriend);
	});

// function compareScores (newFriend) {
// 	var newFriendScores = newFriend.scores;
// 	var friendsScores = [];
// 	for(i = 0; i < friends.length; i ++);
		
// 	friendsScores = friends[i].scores;
// 	 console.log(newFriendScores);
// 	 console.log(friendsScores);
// }	


};





