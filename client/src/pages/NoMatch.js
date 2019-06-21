import React from "react";
import {Container, Col, Row} from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";

const NoMatch = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;