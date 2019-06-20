var router = require("express").Router()
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
  router.get("/test", function(req, res){
    res.json({message: "testing api routes"})
  })  
module.exports = router