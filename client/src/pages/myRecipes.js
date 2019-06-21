import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SavedRecipeDetail from "../components/SavedRecipeDetail";
import Jumbotron from "../components/Jumbotron";


class MyRecipes extends Component {
    render() {
        return (
          <Container>
            <Row>
              <Col size="md-12">
                  <ju
                <Card>
                 <h1>Template</h1>
                </Card>
                <SavedRecipeDetail>
                    <h1>Saved Recipes</h1>
                </SavedRecipeDetail>
              </Col>
            </Row>
          </Container>
        );
      }
}

export default MyRecipes;