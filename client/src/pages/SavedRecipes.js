import React, { Component } from "react";
import { Col, Container, Row } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
import SavedRecipeDetail from "../Components/SavedRecipeDetail";
import API from "../utils/API";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
// import Modal from "../Components/Modal";
import { Button, Modal as RModal, Label, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
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

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete = (event, id) => {
    console.log(id)
    console.log(event.target)
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  getRecipes = () => {
    // GO TO SERVER AND GET ALL THE UNIQUE TITLES/LABLES FOR SAVED RECIPES
    // SAVE THE ARRAY OF STRINGS TO ARRAY IN STATE
    this.getSavedRecipeLabels()

    Actions.getRecipes(this.state.recipeSearch, this.state.healthLabels)
      .then(res => {
      // DATA COMES  AS A 3D ARRAY (ARRAY WITH OBJS WITH NESTED OBJS [{{}}, {{}}]) 
      // MAP OVER ARRAY AND CREATE NEW ARRAY OF JUST THE NESTED OBJ (WHICH IS THE RECIPE, WE DONT NEED THE OTHER TWO KEYS THEY ARE USELESS)
      // ARRAY OR OBJ  [{}, {}] 
      // MAP REMOVES STUFF WE DONT CARE ABOUT
        let recipeData =  res.data.hits.map(function (a) {return a.recipe});

      // THEN COMPARE THE ARRAY OF RECIPE TITLE/LABLES (THIS.STATE.savedItemLabels) TO THE NEWLY CREATE ARRAY OF OBJS (recipeData)
      // create a new array that doesnt include any object that has a recipe with a name in the savedItemLabels array
       // we do this becasue we dont want to show the user recipes they have already saved. 
      let recipes = recipeData.filter( (a) => {
          return this.state.savedItemLabels.indexOf(a.label) === -1;
        });
        
        // set state with the fileter array
        this.setState({ recipes: recipes, searchBtn: "Search"})
      })
      .then(()=>{
        // update btn text from saved to default of save recipe 
        let saveBtns = document.getElementsByClassName("save-btn");
        for(let i = 0; i < saveBtns.length; i++) {
          saveBtns[i].textContent = "Save Recipe"
        }
      })
      .catch(err => console.log(err));
  };

  handleSelect = event => {
    this.setState({ healthLabels: event.target.value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    let form = document.querySelector('#recipe-form');
    form.reportValidity();

    if (form.checkValidity()) {
      event.preventDefault();
      this.setState({
        recipeSearch: "",
        searchBtn: "Searching..."
      })
      this.getRecipes();
    }
  };

  //save recipe to db
  handleSaveNotes = (e, i) => {
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

  deleteNotes = id => {
    Actions.deleteNotes(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  handleSaveRecipe = (e, i) => {
    var btn = e.target
    btn.textContent = "SAVED!"
    var save = {
      title: this.state.recipes[i].label,
      cautions: this.state.recipes[i].cautions,
      healthLabels: this.state.recipes[i].healthLabels,
      calories: this.state.recipes[i].calories,
      servings: this.state.recipes[i].yield,
      link: this.state.recipes[i].url,
      imgLink: this.state.recipes[i].image,
      ingredients: this.state.recipes[i].ingredientLines
    }
    
  }
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
                      handleDeleteRecipe={this.handleDelete}
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
            <SaveBtn className="btn btn-secondary" id="note-btn" onClick={this.toggle} style={{ background: "white" }} type="save">Save</SaveBtn>
            <DeleteBtn className="btn" onClick={this.toggle} type="delete">Delete</DeleteBtn>

          </ModalFooter>
        </RModal>
      </div>
    );
  }
}

export default SavedRecipes;
