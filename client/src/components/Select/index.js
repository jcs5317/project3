import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Select(props) {
  return (
    <div className="select-group select-group-sm">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

{/* <Col size="" >
                      Health needs:
                      <select value={this.state.healthLabels}   onChange={this.handleSelect}>
                        <option></option>
                        <option>vegan</option>
                        <option>vegetarian</option>
                        <option>sugar-conscious</option>
                        <option>tree-nut-free</option>
                        <option>peanut-free</option>
                        <option>alcohol-free</option>
                      </select>
                    </Col> */}
export default Select;