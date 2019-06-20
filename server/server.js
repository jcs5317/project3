const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 8080;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api", apiRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/recipedb", 
  // in solution examples
  {useCreateIndex: true, useNewUrlParser: true}
)
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
