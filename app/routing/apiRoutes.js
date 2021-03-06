// API routes


// requires the friends array from the friends.js file
var friends = require("../data/friends.js");

var match = [];
// exports this function 
module.exports = function(app) {
// A POST route for /api/new for incoming survy results
	app.post("/api/friends", function(req, res) {
		match = [];
		// pull the info for newFriend
	  var newFriend = req.body;
	   // console logging the scores for the newFriend
	  console.log(newFriend.scores);
	  // console.log(friends);
	  // turning the new friend scores into a new variable
	  var newFriendScores = newFriend.scores;

	  
	  console.log("New Friend Scores: " + newFriendScores);
	  

	    var friendsScores = [];
	    var differenceTotals = [];
	    

	    // pulling the scores from the friends array object and putting the scores into their own array
	    for(i = 0; i < friends.length; i ++){
	      friendsScores = friends[i].scores;
	      console.log("Friend scores: " + friendsScores);

	      // subtracting the friend scores from the newFriend scores and obtaining the absolute value
	      var result = friendsScores.map(function (num, idx) {
	        return Math.abs(num) - Math.abs(newFriendScores[idx]);
	      });
	      // console logging the new array of absolute values
	      console.log("new array: " + result);
	      // adding the items in the friends array together into the sum
	      var sum = result.reduce(add, 0);

	      function add(a, b) {
	          return a + b;
	      }

	      console.log(friends[i].name + ": " + sum);

	      // pushing the sum into a new array called differenceTotals
	      differenceTotals.push(sum);
	      console.log(differenceTotals);           
	  }
	  // this for loop pulls the lowest number in the array and removes the zeros
	      var index = 0;
	      var value = differenceTotals[0];
	      for (var i = 0; i < differenceTotals.length; i++) {
	        if (differenceTotals[i] < value) {
	          value = differenceTotals[i];
	          index = i;
	          console.log("Value: " + value);
	          console.log("Index: " + index);

	         
	        // match = friends[index];
	        }
	      } 
	      // console.log(friends[index]);
	      match.push(friends[index]);
	      // console.log("match: " + friends[index].name);
	      console.log("Match: " + match);

			// pushing new friend into the friends array of objects
	  	// console logging friends with new friend within 
			friends.push(newFriend);
			// console.log(friends);


	  res.json(match);
	});	


// A GET route for /api/friends which displays a JSON of all friends in the system
	app.get("/api/friends", function(req, res) {
	 		// console.log(friends);
	    res.json(friends);
	  
	});

// A GET route for /api/match which displays a JSON of all match in the system
	app.get("/api/match", function(req, res) {
	 		// console.log(newfriend);
	    res.json(match);
	  
	});	


};






