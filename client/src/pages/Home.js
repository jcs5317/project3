import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Card from "../Components/Card";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    search: ""
  };

  // searches the GoogleBooks API storing the data in books array
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // once the search term is submitted, search the GoogleBooks API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  // deletes book from database
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  // saves book to database
  handleSaveBook = bookData => {
    console.log(bookData)
    API.saveBook(bookData)
      .then(alert("Book Saved!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card heading="Template">
            <h1> This is where we can describe our app</h1>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
           
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;