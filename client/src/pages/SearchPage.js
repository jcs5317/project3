import React, { Component } from "react";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
// import SavedBookDetail from "../Components/SavedRecipeDetail";
// import API from "../utils/API";


class SearchPage extends Component {
    render() {
        return (
          <div>
            <Jumbotron>
              </Jumbotron>
            <Container>
            <Row>
              <Col size="md-12">
               
                  <Card heading="Search Form">
                  <h1>This is where the search form should go</h1>
                  </Card>
                
              </Col>
            </Row>
          </Container>
          </div>
    
        );
      }


}
export default SearchPage;
