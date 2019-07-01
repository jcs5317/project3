import React from "react";

const DeleteBtn = props => {
  return (

    <span className="btn" {...props} role="button" tabIndex="0" style={{ margin: "10px",background: "red"}}>

      Delete
    </span>
  );
}

export default DeleteBtn;