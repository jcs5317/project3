import React, { Component } from "react";
import {Col, Container, Row} from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import SearchForm from "../Components/SearchForm";
import Card from "../Components/Card";
// import SavedBookDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";


class SearchPage extends Component {
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
                <Jumbotron>

                </Jumbotron>

            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Card heading="Search for Recipes">
                        
                       

                        <SearchForm>

                        </SearchForm>
                        </Card>
                    </Col>

                    <Col size="md-6 sm-12">

                        <Card heading="My recipe list">


                        <h3>No Results to Display</h3>
                        </Card>

                    </Col>
                </Row>
            </Container>
            </Container >
          );

    }

}
export default SearchPage;
