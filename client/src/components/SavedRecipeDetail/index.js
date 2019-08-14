import React from "react";
import DeleteBtn from "../DeleteBtn";
// import { Row, Col } from "../Grid";


const SavedRecipeDetail = props => {
  return (
    <span>
      <hr style={{ clear: "both" }} />
      <div className="col-md-6" style={{ float: "left", marginTop: "20px" }}>
          
            <img alt={props.title} className="img-fluid" src={props.thumbnail} style={{ margin: "0 auto", }} />
      </div>
      <div className="col-md-6" style={{ float: "right", marginTop: "20px" }}>
          <p style={{ fontSize: "15px", lineHeight: "10px"}}><h4>{props.title}</h4></p>
            <p><strong>Ingredients:</strong>{props.ingredients.join(", ")} </p>
            <p><strong>Calories:</strong> {props.calories}</p>
            <p><strong>Cautions:</strong> {props.cautions.join(", ")}</p>
            <p><strong>Servings:</strong> {props.servings}</p>
            <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to Recipe!</a>
        <br></br>
        <DeleteBtn onClick={props.handleDeleteRecipe} className="btn btn-warning delete-btn"></DeleteBtn>
        <button onClick={props.openModal} className="btn note-btn" style={{ margin: "10px" }}>
          Notes
        </button>
      </div>

      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default SavedRecipeDetail;