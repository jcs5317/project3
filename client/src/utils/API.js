import axios from "axios";
const edamamBaseUrl = `https://api.edamam.com/search`;
// no need to get these values server side if they aren not being stored to a DB. just display on the front end.

export default {
  getSavedRecipeLabels: () =>{
    return axios.get("/api/saved/recipe/labels", {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    })
  },
  getRecipes: (query, healthLabels) => {
    let url = `https://cors-anywhere.herokuapp.com/${edamamBaseUrl}?q=${query}&app_id=${
      process.env.REACT_APP_EDM_ID
      }&app_key=${process.env.REACT_APP_EDM_KEY}`;

    if (healthLabels) {
      url += `&health=${healthLabels}`;
    }

    return axios.get(url);

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
  saveRecipe: function (recipeData) {
    return axios.post("/api/saved/recipe", recipeData, {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  },

  deleteRecipe: function(id) {
    return axios.delete("/api/saved/recipe/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  },

  getNotes: function() {
    return axios.get("/api/notes", {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  },
  // Gets the note with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  },
  // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id, {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  },
  // Saves a note to the database
  saveNotes: function(noteData) {
    return axios.post("/api/notes", noteData, {
      headers: {
        Authorization: window.sessionStorage.getItem("user-token")
      }
    });
  }
}
