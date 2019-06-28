import React, { Component } from "react";
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import SavedRecipeDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
// import Modal from "../Components/Modal";
import { Button, Modal as RModal, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';





class SavedRecipes extends Component {
  state = {
    recipes: [],
    modal: false
  };

  // grab the recipes from /api/recipes
  componentDidMount() {
    API.getSavedRecipes()
      .then(res =>
        this.setState(
          {
            recipes: res.data
          },
          console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }

  // openModal() {
  //   this.setState({modal: true});
  // }

  // closeModal() {
  //   this.setState({modal: false});
  // }
  toggle = () => {
    this.setState({
     modal: !this.state.modal
    });
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
  handleDeleteRecipe = (event, id) => {
    console.log(id)
    console.log(event.target)
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav signedIn={true
        } />
        <Container>
          <Jumbotron />
          
          <Row>
            <Col size="md-12">
              {console.log(this.state.recipes)}
              {this.state.recipes.length ? (
                <Card heading="Saved Recipes">
                  {this.state.recipes.map(recipe => (
                    <SavedRecipeDetail
                      key={recipe._id}
                      id={recipe._id}
                      title={recipe.title}
                      href={recipe.link}
                      // this is an array
                      cautions={recipe.cautions}
                      // this is an array
                      healthLabels={recipe.healthLabels}
                      calories={parseFloat(recipe.calories).toFixed(2)}
                      servings={recipe.servings}
                      // this is an array
                      ingredients={recipe.ingredients}
                      thumbnail={recipe.imgLink}

                      handleDeleteRecipe={this.handleDeleteRecipe}
                      openModal={this.toggle}
                    />
                  ))}
           
                </Card>
              ) : (
                <Card heading="Saved Recipes" />
              )}
              
            
            </Col>
          </Row>
        </Container>
        <Footer />
        <Button onClick={this.toggle}></Button>
        <RModal isOpen={this.state.modal}>
           <ModalHeader>
               <h1>Test test ....</h1>
           </ModalHeader>
           <ModalBody>
               <p>testing 123</p>
           </ModalBody>
           <ModalFooter>
               <Button onClick={this.toggle} type="save">Save</Button>
               <Button onClick={this.toggle} type="delete">Delete</Button>
           </ModalFooter>
       </RModal>
      </div>
    );
  }
}

export default SavedRecipes;
