import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
//TODO make class smart component and export
// RecipeListItem renders a bootstrap list item containing data from the recipe api call

const RecipeListItem = (props) =>{
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-4">
              <img src={props.thumbnail} alt="recipes" />
            </Col>
            <Col size="xs-8 sm-8">
              <h4>{props.title}</h4>
              <p>{(props.calories/props.servings).toFixed(2)} calories per serving</p>
              <p>Serves: {props.servings}</p>
              <ul>
              <p>Ingredients: {props.ingredients}</p>
              </ul>
                <hr/>
              <ul>
                <p>Caution: {props.cautions}</p>
              </ul>
                <hr/>
              <a rel="noreferrer noopener" target="_blank" href={props.href} style= {{float: "right"}}>
                Go to recipe!
              </a>
              <br/>
              <br/>
              <button className="btn btn-lg btn-success save-btn" onClick={(event) => props.handleSaveRecipe(event, props.index)}>Save Recipe</button>
              
            </Col>
          </Row>
        </Container>
      </li>
    );
  }

export default RecipeListItem;