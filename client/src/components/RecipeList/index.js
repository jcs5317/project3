import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  thumbnail = [],
  title,
  ingredients,
  href,
  calories,
  servings,
  calPer = (calories/servings).toFixed(2),
  cautions,
  healthLabels
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <img src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>{calPer} calories per serving</p>
            <p>Serves {servings}</p>
            <ul>
            <p>Ingredients:</p>
              {ingredients.map((ingredient, i) => {
               return (
                <li key={i}>
                  {ingredient}
                </li>
               )
              })}
            </ul>
              <hr/>
            <ul>
              Caution:
              {cautions.map((item,i)=>{
                return (
                (item === 'FODMAP')?  
                ""
                : 
                <li key={i}>
                 {item}
                </li>
                )
              })}
            </ul>
              <hr/>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to recipe!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
