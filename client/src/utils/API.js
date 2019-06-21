import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  searchRecipes: function(query) {
    return axios.get(BASEURL + query);
  },
  getRecipes: function() {
    return axios("/api/recipes");
  },
  saveRecipes: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  deleteRecipe: function(id) {
    return axios.delete("api/recipes/" + id)
  }
};


