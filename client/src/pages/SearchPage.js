import React, { Component } from "react";
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
// import SearchForm from "../Components/SearchForm";
import Card from "../Components/Card";
import Actions from "../utils/API";
import { RecipeList } from "../Components/RecipeList";
import RecipeListItem from "../Components/RecipeListItem";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

class SearchPage extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    query: "",
    searchBtn: "Search",
    healthLabels: "",
    savedItemLabels: []
  };

  getSavedRecipeLabels = () => {
    Actions.getSavedRecipeLabels()
    .then(response => {
      this.setState({savedItemLabels: response.data.labels});
    })

  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  getRecipes = () => {
    // GO TO SERVER AND GET ALL THE UNIQUE TITLES/LABLES FOR SAVED RECIPES
    // SAVE THE ARRAY OF STRINGS TO ARRAY IN STATE
    this.getSavedRecipeLabels()

    Actions.getRecipes(this.state.recipeSearch, this.state.healthLabels)
      .then(res => {
      // DATA COMES  AS A 3D ARRAY (ARRAY WITH OBJS WITH NESTED OBJS [{{}}, {{}}]) 
      // MAP OVER ARRAY AND CREATE NEW ARRAY OF JUST THE NESTED OBJ (WHICH IS THE RECIPE, WE DONT NEED THE OTHER TWO KEYS THEY ARE USELESS)
      // ARRAY OR OBJ  [{}, {}] 
      // MAP REMOVES STUFF WE DONT CARE ABOUT
        let recipeData =  res.data.hits.map(function (a) {return a.recipe});

      // THEN COMPARE THE ARRAY OF RECIPE TITLE/LABLES (THIS.STATE.savedItemLabels) TO THE NEWLY CREATE ARRAY OF OBJS (recipeData)
      // create a new array that doesnt include any object that has a recipe with a name in the savedItemLabels array
       // we do this becasue we dont want to show the user recipes they have already saved. 
      let recipes = recipeData.filter( (a) => {
          return this.state.savedItemLabels.indexOf(a.label) === -1;
        });
        
        // set state with the fileter array
        this.setState({ recipes: recipes, searchBtn: "Search"})
      })
      .then(()=>{
        // update btn text from saved to default of save recipe 
        let saveBtns = document.getElementsByClassName("save-btn");
        for(let i = 0; i < saveBtns.length; i++) {
          saveBtns[i].textContent = "Save Recipe"
        }
      })
      .catch(err => console.log(err));
  };

  handleSelect = event => {
    this.setState({ healthLabels: event.target.value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    let form = document.querySelector('#recipe-form');
    form.reportValidity();

    if (form.checkValidity()) {
      event.preventDefault();
      this.setState({
        recipeSearch: "",
        searchBtn: "Searching..."
      })
      this.getRecipes();
    }
  };

  //save recipe to db
  handleSaveRecipe = (e, i) => {
    var btn = e.target
    btn.textContent = "SAVED!"
    var save = {
      title: this.state.recipes[i].label,
      cautions: this.state.recipes[i].cautions,
      healthLabels: this.state.recipes[i].healthLabels,
      calories: this.state.recipes[i].calories,
      servings: this.state.recipes[i].yield,
      link: this.state.recipes[i].url,
      imgLink: this.state.recipes[i].image,
      ingredients: this.state.recipes[i].ingredientLines
    }

    Actions.saveRecipe(save)
      .then((response) => {
        if (response) {
          alert("Recipe Saved!")
          // remove the save button from 
          // this.props.history.push("/savedrecipes");
        } else {
          alert("Something went wrong!")
        }
      })
      .catch(err => alert("Recipe already saved!"));
  };

  removeRecipe = id => {
    Actions.removeRecipe(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav signedIn={true}/>
        <Container>
          <Jumbotron />
          <br />
          <br />
          <Row>
            <Col size="md-12">
              <form id="recipe-form">
                <Container>
                  <Row>
                    <Col size="xs-4 sm-6">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                        required={true}
                      />
                    </Col>
                    <Col size="" >
                      Health needs:
                      <select value={this.state.healthLabels}  placeholder="Health Needs" onChange={this.handleSelect}>
                        <option></option>
                        <option>vegan</option>
                        <option>vegetarian</option>
                        <option>sugar-conscious</option>
                        <option>tree-nut-free</option>
                        <option>peanut-free</option>
                        <option>alcohol-free</option>
                      </select>
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        {this.state.searchBtn}
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12 lg-12" align="center">
              <br />
              <br />
              <hr />
              <Card size="lg-12" align="center">
                {!this.state.recipes.length ? (
                  <h1 className="text-center">No Recipes to Display</h1>
                ) : (
                    <RecipeList>
                      {this.state.recipes.map((recipe, i) => {
                      
                        return (

                          <RecipeListItem
                            key={i}
                            index={i}
                            title={recipe.label}
                            href={recipe.url}
                            // this is an array 
                            cautions={recipe.cautions}
                            // this is an array 
                            healthLabels={recipe.healthLabels}
                            calories={recipe.calories.toFixed(2)}
                            servings={recipe.yield}
                            // this is an array
                            ingredients={recipe.ingredientLines.toString()}
                            thumbnail={recipe.image}
                            handleSaveRecipe={this.handleSaveRecipe}
                          />
                        );
                      })}
                    </RecipeList>
                  )}
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default SearchPage;
