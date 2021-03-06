// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enables local CSS page (Note: CSS will have to be stored in the public folder)
app.use(express.static(__dirname + '/public'));

// Routing
app.use(express.static("app"));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

// Listening on port function
app.listen(PORT, function() {
    console.log("listening on port", PORT);
  });
  