import React, { Component } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Jumbotron";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Card from "../Components/Card";
// import SavedBookDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";

class SavedRecipes extends Component {
  state = {
    books: []
  };

  // grab the books from /api/books
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState(
        {
          books: res.data
        },
        console.log(res.data)
      )
      )
      .catch(err => console.log(err));
  }

  // loads all books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // deletes a book
  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
                <h1>This is where the saved recipes should go</h1>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default SavedRecipes;