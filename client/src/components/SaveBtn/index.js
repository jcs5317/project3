import React from "react";

const SaveBtn = props => {
  return (
    <span className="note-btn" {...props} role="button" tabIndex="0" style={{marginBottom: "30px", background: "green"}}>
    Save
    </span>
  );
}

export default SaveBtn;