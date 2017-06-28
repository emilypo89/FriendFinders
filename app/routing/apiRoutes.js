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

	  console.log(newFriend.scores);
	  // console.log(friends);
	  var newFriendScores = newFriend.scores;
	  friends.push(newFriend);
	  console.log(friends);
	  console.log("New Friend Scores: " + newFriendScores);
	  
			var friendsScores = [];

			for(i = 0; i < friends.length; i ++){
				friendsScores = friends[i].scores;
				console.log("Friend scores: " + friendsScores);


				var result = friendsScores.map(function (num, idx) {
				  return Math.abs(num) - Math.abs(newFriendScores[idx]);
				});
				console.log("new array: " + result);

				var sum = result.reduce(add, 0);

				function add(a, b) {
				    return a + b;
				}

				console.log(Math.abs(sum));

				// console.log("Difference: " + numberarr2);
			}

			
		
			
			
			

	 // compareScores(newFriend);

	  res.json(newFriend);
	});

// function compareScores (newFriend) {

// }	


};





