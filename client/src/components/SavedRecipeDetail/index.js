import React from "react";
import DeleteBtn from "../DeleteBtn";

const SavedRecipeDetail = props => {


  return (
    <span>
      <div className="col-md-4" style={{ float: "left", marginTop: "20px" }}>
        <img alt={props.title} className="img-fluid" src={props.thumbnail} style={{ margin: "0 auto" }} />
        <p style={{ fontSize: "20px" }}>{props.title}</p>
        <p><strong>Ingredients:</strong>{props.ingredients.join(", ")} </p>
        <p><strong>Calories:</strong> {props.calories}</p>
        <p><strong>Cautions:</strong> {props.cautions.join(", ")}</p>
        <p><strong>Servings:</strong> {props.servings}</p>
        <p><strong>Recipe Link:</strong> {props.href}</p>
        <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to Recipe!</a>
        <br></br>
        <DeleteBtn onClick={props.handleDelete} className="btn btn-warning delete-btn" style={
      { marginBottom: "30px"}}></DeleteBtn>
        <button onClick={props.openModal} className="btn note-btn" style={{ marginBottom: "30px"}}>
          Notes
        </button>
      </div>

      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default SavedRecipeDetail;
