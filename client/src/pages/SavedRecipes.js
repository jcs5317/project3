import React, { Component } from "react";
import {Col, Container, Row} from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import SavedRecipeDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";
import Footer from "../Components/Footer";

class SavedRecipes extends Component {
  state = {
    recipes: []
  };

  // grab the recipes from /api/recipes
  componentDidMount() {
    API.getRecipes()
      .then(res => this.setState(
        {
          recipes: res.data
        },
        console.log(res.data)
      )
      )
      .catch(err => console.log(err));
  }

  // loads all recipes
  // loadRecipe = () => {
  //   API.getRecipes()
  //     .then(res =>
  //       this.setState({ recipes: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deletes a book
  handleDeleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
          </Jumbotron>
          <Row>
            <Col size="md-12">
            {this.state.recipes.length ?(<Card heading="Saved Recipes">
                {this.state.recipes.map(recipe => (
                    <SavedRecipeDetail
                    key={recipe._id}
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
                        thumbnail={recipe.recipe.image} />
                ))}
                
            </Card>
            ) : (
              <Card heading="Saved Recipes">
              </Card>
            )}
            </Col>
          </Row>
        </Container>
        <Footer>
          
        </Footer>
      </div>
      

    );
  }
}

export default SavedRecipes;