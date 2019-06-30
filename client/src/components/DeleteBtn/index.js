import React from "react";

const DeleteBtn = props => {
  return (
    <span className="btn btn-warning delete-btn " {...props} role="button" tabIndex="0" style={{marginBottom: "30px"}}>
      Delete
    </span>
  );
}

export default DeleteBtn;