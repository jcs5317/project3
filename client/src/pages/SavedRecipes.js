import React, { Component } from "react";
import {Col, Container, Row} from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
// import SavedBookDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";

class SavedRecipes extends Component {
  state = {
    recipes: []
  };

  // grab the books from /api/books
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

  // loads all books
  loadBooks = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data })
      )
      .catch(err => console.log(err));
  };

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

              <Card heading="Saved Recipes">
                <h1>This is where the saved recipes will go</h1>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default SavedRecipes;