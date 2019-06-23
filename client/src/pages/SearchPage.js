import React, { Component } from "react";
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
// import SearchForm from "../Components/SearchForm";
// import Card from "../Components/Card";
// import SavedBookDetail from "../Components/SavedRecipeDetail";
// import API from "../utils/API";
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

    if (form.checkValidity()) {
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
                        Search
                      </Button>
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
        <Footer>
          
        </Footer>
      </div>
    );
  }
}
// export default App;
// import Container from "../Components/Container";
// import Row from "../Components/Row";
// import Col from "../Components/Col";
// import Jumbotron from "../Components/Jumbotron";
// import SearchForm from "../Components/SearchForm";
// import Card from "../Components/Card";
// // import SavedBookDetail from "../Components/SavedRecipeDetail";
// import API from "../utils/API";


// class SearchPage extends Component {
//     state = {
//         books: [],
//         search: ""
//     };

//     // searches the GoogleBooks API storing the data in books array
//     searchBooks = query => {
//         API.searchBooks(query)
//             .then(res =>
//                 this.setState(
//                     {
//                         books: res.data.items,
//                         search: ""
//                     },
//                     console.log(res.data.items)
//                 )
//             )
//             .catch(err => console.log(err));
//     };

//     handleInputChange = event => {
//         const value = event.target.value;
//         const name = event.target.name;
//         this.setState({
//             [name]: value
//         });
//     };

//     // once the search term is submitted, search the GoogleBooks API for the value of `this.state.search`
//     handleFormSubmit = event => {
//         event.preventDefault();
//         this.searchBooks(this.state.search);
//     };

//     // deletes book from database
//     deleteBook = id => {
//         API.deleteBook(id)
//             .then(res => console.log(res.status))
//             .catch(err => console.log(err));
//     };

//     // saves book to database
//     handleSaveBook = bookData => {
//         console.log(bookData)
//         API.saveBook(bookData)
//             .then(alert("Book Saved!"))
//             .catch(err => console.log(err));
//     };
//     render() {
//         return (
//             <Container>
//                 <Jumbotron>

//                 </Jumbotron>

//             <Container fluid>
//                 <Row>
//                     <Col size="md-6">
//                         <Card heading="Search for Recipes">



//                         <SearchForm>

//                         </SearchForm>
//                         </Card>
//                     </Col>

//                     <Col size="md-6 sm-12">

//                         <Card heading="My recipe list">


//                         <h3>No Results to Display</h3>
//                         </Card>

//                     </Col>
//                 </Row>
//             </Container>
//             </Container >
//           );

//     }

// }
export default SearchPage;
