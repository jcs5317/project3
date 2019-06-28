var router = require("express").Router();
const passport = require("passport");
const passportJWTStrategy = passport.authenticate("jwt", { session: false });
const db = require("../models");

router.get("/test", function(req, res) {
  res.json({ message: "testing api routes" });
});

router.post("/saved/recipe", passportJWTStrategy, function(req, res) {
  // console.log("create recipe:", req.body);
  const recipe = { ...req.body, user: req.user.id };
 
  db.Recipe.create(recipe)
    .then(function(recipe) {
     
      res.json(recipe);
    })
    .catch(function(err) {
     
      res.status(400).json({ error:"You must be logged in to search for recipes" });
    });
  // create new save recipe
  // if user is logged in
  // get user ID
  // just like to article in scraper
  // look at scraper for example
  // create reciepe with logged in user id

  // res.json(true);
  // if error or something happens item not created send res.json(false)
});

router.get("/saved/recipe/labels", passportJWTStrategy,  function(req, res) {
  // get all saved recipes
  
  db.Recipe.find({ user: req.user.id })
    .then(recipedb => {
    
      let saveditems = {
        labels: []
      }
    
      recipedb.forEach((item, i)=>{

        saveditems.labels.push(item.title)
      })
     
  
      res.json(saveditems);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
})

router.get("/saved/recipe", passportJWTStrategy, function(req, res) {
  // get all saved recipes
  db.Recipe.find({ user: req.user.id })
    .then(recipedb => {
      res.json(recipedb);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

router.get("/saved/recipe/:id", function(req, res) {
  
});

router.delete("/saved/recipe/:id", passportJWTStrategy,  function(req, res) {
  // delete save recipe
  var id = req.params.id
  var user = req.user.id

  // delete recipe where user === user && id === id

});

router.put("/saved/recipe/:id", function(req, res) {
  // update save recipe
});

module.exports = router;
