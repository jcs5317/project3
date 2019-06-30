import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "../Components/Grid";
import Card from "../Components/Card";
import Nav from "../Components/Nav";


class Home extends Component {

 
  render() {
    return (
      <div>
        <Nav signedIn={false} />
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron />
            </Col>
          </Row>
          <Row>
            <Card className="plot">
              <div className="logo align-center">
                <div className="image">
                <Col size="md-12">
                  <div id="x"><img src="https://www.xing.com/img/custom/communities/communities_files/c/b/7/64695/large/Healthy-Living-Icon-small.png?1533893961" alt="health img"/></div>
                </Col>
                </div>
              
                <Col size="md-12">          
                <h4> This app is a simple and easy to use platform for users to search and find recipes and all their delicacies. Not only that, but users will also be able to find out recipes of foods that will be tailored to their personal requirements such as allergies, vegetarian/non-vegetarian needs, and lifestyle choices.</h4>
                </Col>
              </div>
              </Card>
          </Row>

        </Container >

      <Footer>
      </Footer>
      </div >

    );

  }
}

export default Home;