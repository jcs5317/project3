import React from "react";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";

const SearchForm = props => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">


        </Col>
      </Row>
    
    <form>
      <p style={{fontSize: "25px", textAlign: "left"}}>Ingredients</p>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input style={{ textAlign: "left" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Beef , Chicken, Pork, Fish etc"
          id="search"
        />
        <br />
        <br />
        <p style={{fontSize: "25px", textAlign: "left"}}>Dietary restrictions</p>
         <input style={{ textAlign: "left" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Dietary restrictions"
          id="search"
        />
        <br />
        <br />
        <p style={{fontSize: "25px", textAlign: "left"}}>Ingredients</p>
         <input style={{ textAlign: "left" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Ingredients"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
    </Container>
  );
}

export default SearchForm;
