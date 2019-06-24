var router = require("express").Router();
const passport = require("passport");
const passportJWTStrategy = passport.authenticate("jwt", { session: false });
// React front end code?
//  const App = () => {

//   const APP_ID = '';
//   const APP_KEY = '';

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('chicken');

//   useEffect(() =>{
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log(data.hits)
//   };
<<<<<<< HEAD
  router.get("/test", function(req, res){
    res.json({message: "testing api routes"})
  })  

  router.post("/saved/recipe", function(req, res){
    // create new save recipe
    // if user is logged in 
    // get user ID
    // just like to article in scraper
    // look at scraper for example 
    // create reciepe with logged in user id
    console.log("create recipe:",req.body);

    res.json(true);
    // if error or something happens item not created send res.json(false)
  }) 

  router.get("/saved/recipe", function(req, res){
     // get all saved recipes
  })  

  router.get("/saved/recipe/:id", function(req, res){
    // get 1 saved recipes by id
 })  

  router.delete("/saved/recipe/:id", function(req, res){
    // delete save recipe
  }) 

  router.put("/saved/recipe/:id", function(req, res){
    // update save recipe
  })  

module.exports = router
=======
router.get("/test", function(req, res) {
  res.json({ message: "testing api routes" });
});

router.get("/supersecretroute", passportJWTStrategy, function(req, res) {
  res.json({ message: "You have reached the secret route!" });
});

module.exports = router;
>>>>>>> 38868ed2f62f2096f223221a77f293b19bc44c39
