import axios from "axios";
const edamamBaseUrl = `https://api.edamam.com/search`;
// no need to get these values server side if they aren not being stored to a DB. just display on the front end.

export default {
  getRecipes: query => {
    // remove https://cors-anywhere.herokuapp.com/ when push to heroku
    // cors issue fix
    return axios.get(
      `https://cors-anywhere.herokuapp.com/${edamamBaseUrl}?q=${query}&app_id=${
        process.env.REACT_APP_EDM_ID
      }&app_key=${process.env.REACT_APP_EDM_KEY}`
    );
  },

  getSavedRecipes: () => {
    // Need to check for user-token before calling method
    return axios.get("/api/saved/recipe", {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  },
  //   getRecipes: function() {
  //     return axios("/api/recipes");
  //   },
  saveRecipe: function(recipeData) {
    return axios.post("/api/saved/recipe", recipeData,  {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
  });
}
  // deleteRecipe: function(id) {
  //   return axios.delete("/api/saved/recipe" + id);
  // }
}
