import React, { Component } from "react";
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
// import SearchForm from "../Components/SearchForm";
import Card from "../Components/Card";
import Actions from "../utils/API";
import { RecipeList, RecipeListItem } from "../Components/RecipeList";
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
    healthLabels: ""
  };


  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  getRecipes = () => {
    Actions.getRecipes(this.state.recipeSearch, this.state.healthLabels)
      .then(res => {
        this.setState({ recipes: res.data.hits, searchBtn: "Search" })
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
    var save = {
      title: this.state.recipes[i].recipe.label,
      cautions: this.state.recipes[i].recipe.cautions,
      healthLabels: this.state.recipes[i].recipe.healthLabels,
      calories: this.state.recipes[i].recipe.calories,
      servings: this.state.recipes[i].recipe.yield,
      link: this.state.recipes[i].recipe.url,
      imgLink: this.state.recipes[i].recipe.image,
      ingredients: this.state.recipes[i].recipe.ingredientLines
    }
    console.log(this.state.recipes[i].recipe.ingredients)


    Actions.saveRecipe(save)
      .then((response) => {
        if (response) {
          alert("Recipe Saved!")
          this.props.history.push("/savedrecipes");
        } else {
          alert("Something went wrong!")
        }
      })
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    Actions.deleteRecipe(id)
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
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                        required={true}
                      />
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
                    <Col size="">
                      Health needs:
                      <select value={this.state.healthLabels} onChange={this.handleSelect}>
                        <option></option>
                        <option>vegan</option>
                        <option>vegetarian</option>
                        <option>sugar-conscious</option>
                        <option>tree-nut-free</option>
                        <option>peanut-free</option>
                        <option>alcohol-free</option>
                      </select>
                    </Col>
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
                        console.log(recipe)
                        return (

                          <RecipeListItem
                            key={i}
                            index={i}
                            title={recipe.recipe.label}
                            href={recipe.recipe.url}
                            // this is an array 
                            cautions={recipe.recipe.cautions}
                            // this is an array 
                            healthLabels={recipe.recipe.healthLabels}
                            calories={recipe.recipe.calories.toFixed(2)}
                            servings={recipe.recipe.yield}
                            // this is an array
                            ingredients={recipe.recipe.ingredientLines.toString()}
                            thumbnail={recipe.recipe.image}
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
