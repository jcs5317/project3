import React, { Component } from "react";
import Jumbotron from "..Button/components/Jumbotron";
import Nav from "../components/Row";
import Input from "./components/Input";
import Button from "./components/Button";
import Actions from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    query: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      query: value
    });
  };

  getRecipes = () => {
    Actions.getRecipes(this.state.query)
      .then(res => {
        this.setState({ recipes: res.data.hits })
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    let form = document.querySelector('#recipe-form');
    form.reportValidity();

    if(form.checkValidity()){
      event.preventDefault();
      this.setState({
        recipeSearch: ""
      })
      this.getRecipes();
    } 
  };



  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
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
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
           
            <Col size="xs-12 lg-12"  align="center">

            <br/>
            <br/>
            <hr/>
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map((recipe, i) => {
                    return (
                      <RecipeListItem
                        key={i}
                        title={recipe.recipe.label}
                        href={recipe.recipe.url}
                        // this is an array 
                        cautions={recipe.recipe.cautions}
                         // this is an array 
                        healthLabels={recipe.recipe.healthLabels}
                        calories={recipe.recipe.calories.toFixed(2)}
                        servings={recipe.recipe.yield}
                        // this is an array
                        ingredients={recipe.recipe.ingredientLines}
                        thumbnail={recipe.recipe.image}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;