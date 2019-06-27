import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components/Footer";
import {Col, Container, Row} from "../Components/Grid";
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
      <div>
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col size="md-20">
            <Card heading="Home">
              <Row >
                <Col size="md-4">
              <img src="http://conquerthecrux.com/wp-content/uploads/2014/03/Healthy-Living-1.jpg"></img>
              </Col>
              <Col size="md-12">

            <h5> This app is a simple and easy platform for users to look up their favorite recipes and all the ingredients used in the recipes. This will allow the users to not only figure out how to prepare their favorite delicacies, but also to make informed decisions about their personal needs, such as allergies, vegetarian/non-vegetarian needs, and health/lifestyle related problems.</h5>
            </Col>
            </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">        
          </Col>
        </Row>
      </Container>
      
         <Footer>
        
        </Footer>
      </div>
     
    );
    
  }
}

export default Home;