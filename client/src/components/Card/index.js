import React from "react"; import { Row } from "../Grid";
import "./style.css";

const Card = props => {
  return (
    <div className="card text-center test_card" style={{ marginBottom: "20px" }}>
        <div className="card-header">
          <h3>{props.heading}</h3>
          <Row>
            <div className="card-body text-left">{props.children}</div>
          </Row>
        </div>
      </div>
  );
}

export default Card;