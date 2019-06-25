var router = require("express").Router();
const passport = require("passport");
const passportJWTStrategy = passport.authenticate("jwt", { session: false });

  router.get("/test", function(req, res){
    res.json({message: "testing api routes"})
  })  

  router.post("/saved/recipe", function(req, res){
    // create new save recipe
    // if user is logged in 
    // get user ID
    // create reciepe with logged in user id
    res.json("saveRecipe")
    console.log("recipe:",req.body);

    res.json(true);
    // if error or something happens item not created send res.json(false)
  }) 

  router.get("/saved/recipe", function(req, res){
     // get all saved recipes
     res.json("SavedRecipeDetails")
  })  

  router.get("/saved/recipe/:id", function(req, res){
    // get 1 saved recipes by id
    res.json("SavedRecipeDetails")
 })  

  router.delete("/saved/recipe/:id", function(req, res){
    // delete save recipe
  }) 

  router.put("/saved/recipe/:id", function(req, res){
    // update save recipe
  })  

module.exports = router
