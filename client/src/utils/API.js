import axios from "axios";
const edamamBaseUrl = `https://api.edamam.com/search`
// no need to get these values server side if they aren not being stored to a DB. just display on the front end.

export default {
  getRecipes: (query) => {
    // remove https://cors-anywhere.herokuapp.com/ when push to heroku
    // cors issue fix
    return axios.get(`https://cors-anywhere.herokuapp.com/${edamamBaseUrl}?q=${query}&app_id=${process.env.REACT_APP_EDM_ID}&app_key=${process.env.REACT_APP_EDM_KEY}`);
  }
};
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// export default {
//   searchRecipes: function(query) {
//     return axios.get(BASEURL + query);
//   },
//   getRecipes: function() {
//     return axios("/api/recipes");
//   },
//   saveRecipes: function(recipeData) {
//     return axios.post("/api/recipes", recipeData);
//   },
//   deleteRecipe: function(id) {
//     return axios.delete("api/recipes/" + id)
//   }
// };


