import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

//TODO make class smart component and export
// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
//TODO make class smart component and export
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  index,
  thumbnail = [],
  title,
  ingredients,
  href,
  calories,
  servings,
  calPer = (calories/servings).toFixed(2),
  cautions,
  healthLabels,
  handleSaveRecipe
}) {
  return (
    
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-4">
            <img src={thumbnail} alt="recipes" />
          </Col>
          <Col size="xs-8 sm-8">
            <h3>{title}</h3>
            <p>{calPer} calories per serving</p>
            <p>Serves: {servings}</p>
            <ul>
            <p>Ingredients: {ingredients}</p>
            </ul>
              <hr/>
            <ul>
              <p>Caution: {cautions}</p>
            </ul>
              <hr/>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to recipe!
            </a>
            <button onClick={(event) => handleSaveRecipe(event, index)}>Save Recipe</button>
            
          </Col>
        </Row>
      </Container>
    </li>
  );
}
