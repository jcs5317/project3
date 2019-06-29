import React from "react";
import DeleteBtn from "../DeleteBtn";

// import { RecipeList } from "../RecipeList";

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
        <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to Recipe!</a>
        <br></br>
        <DeleteBtn onClick={props.handleDelete} />

        <button onClick={props.handleNotes} className="btn btn-secondary note-btn" style={{ margin: "10px" }}>
          Notes
        </button>
      </div>
      <div className="col-md-8">
        <p style={{ marginTop: "100px" }}><strong>Notes:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default SavedRecipeDetail;
