// requiring dependencies
var path = require("path");

// exporting the function
module.exports = function(app) {
	// A GET route to the root (/) page to display the home.html page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

// A GET route to the /survey page to diplay the survey.html page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
};
