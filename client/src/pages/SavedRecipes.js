import React, { Component } from "react";
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import SavedRecipeDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
// import Modal from "../Components/Modal";
import { Button, Modal as RModal, Label, Form, FormGroup, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "../pages/style.css";
import SaveBtn from "../Components/SaveBtn";
import DeleteBtn from "../Components/DeleteBtn";
import Actions from "../utils/API";


class SavedRecipes extends Component {
  state = {
    recipes: [],
    modal: false,
    notes: []
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

// loads all recipes
loadRecipe = () =>  {
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

// deletes a recipe
handleDeleteRecipe =(id) => {
  console.log(id)
  //console.log(event.target)
  API.deleteRecipe(id)
    .then(res => this.loadRecipes())
    .catch(err => console.log(err));
};


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  //save recipe to db
  handleSaveNotes = (e) => {
    this.toggle();
    var btn = e.target
    btn.textContent = "SAVED!"
    var save = {
      body: this.state.body
    }

    Actions.saveNotes(save)
      .then((response) => {
        if (response) {
          alert("Note Saved!")
          // remove the save button from 
          // this.props.history.push("/savedrecipes");
        } else {
          alert("Something went wrong!")
        }
      })
      .catch(err => alert("Recipe already saved!"));
  };

  deleteNote = id => {
    Actions.deleteNote  (id)
      .then(res => console.log(res.status))
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
          <ModalHeader className="modalHeader">

            <h5 >Recipe</h5>

          </ModalHeader>
          <ModalBody className="modalBody">
            <Form>
              <FormGroup >
                <Label for="exampleText">Edit Recipe</Label>
                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <SaveBtn className="btn btn-secondary" id="note-btn" onClick={this.handleSaveNotes} style={{ background: "white" }} type="save">Save</SaveBtn>
            <DeleteBtn className="btn" onClick={this.toggle} type="delete">Delete</DeleteBtn>

          </ModalFooter>
        </RModal>
      </div>
    );
  }
}

export default SavedRecipes;

