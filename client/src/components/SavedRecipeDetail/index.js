import React from "react";

const SavedRecipeDetail = props => {
  return (
    <span>
      <div className="col-md-4" style={{ float: "left", marginTop: "20px" }}>
        <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
        <p style={{ fontSize: "30px" }}>{props.title}</p>
        <p><strong>Title:</strong> {props.title}</p>
        <p><strong>Ingredients:</strong> {props.ingredients}</p>
        <p><strong>Calories:</strong> {props.calories}</p>
        <p><strong>Servings:</strong> {props.servings}</p>
        <p><strong>Recipe Link:</strong> <a href={props.url} target={"_blank"} >{props.title}</a></p>
        <button onClick={props.handleDeleteBook} className="btn btn-warning delete-btn" style={{ marginBottom: "30px"}}>
          Delete
        </button>
      </div>
      <div className="col-md-8" style={{ float: "right", marginTop: "20px" }}>
        <p style={{ marginBottom: "30px"}}><strong>Description:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default SavedRecipeDetail;
