import React from "react";

const RecipeDetail = props => {
  return (
    <span>
      <div className="col-md-4" style={{ float: "left", marginTop: "20px" }}>
        <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
        <p style={{ fontSize: "30px" }}>{props.title}</p>
        <p><strong>Caution(s):</strong> {props.cautions}</p>
        <p><strong>Health Labels:</strong> {props.healthlabels}</p>
        <p><strong>Calories:</strong> {props.calories.toFixed(2)}</p>
        <p><strong>Servings:</strong> {props.servings}</p>
        <p>Ingredients: {props.ingredientLines}</p>
        <p><strong>Recipe Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
        <button onClick={props.handleSaveRecipe} className="btn btn-primary save-btn" style={{ marginBottom: "30px"}}>
          Save Recipe
        </button>
      </div>
      <div className="col-md-8" style={{ float: "right", marginTop: "20px" }}>
        <p style={{ marginBottom: "30px"}}><strong>Description:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default RecipeDetail;