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
            <Card className="plot" heading="Home">
              <div className="logo align-center">
                <div className="image">
                  <Col size="md-12">
                    <div id="x"><img src="https://www.xing.com/img/custom/communities/communities_files/c/b/7/64695/large/Healthy-Living-Icon-small.png?1533893961" alt="health img" /></div>
                  </Col>
                </div>

                <Col size="md-12">
                  <ul style={{fontSize: "20px", listStyle: "none"}}>
                    <li >The application is a recipe finder that helps people find and save their favorite recipes, what ingredients to use, and how to create the delicacies.
                  </li>
                  <br />
                    <li>This app also allows users to search specific recipes based on a search criteria involving the users that may have certain needs.
                  </li>
                  <br />
                    <li>The application’s simple format and user friendly interface will allow these users to look up all the relevant recipes such as peanut-free recipes for those with peanut allergies, or vegetarian recipes for those that are vegan.
                  </li>
                  <br />
                    <li>The users will also be able to save recipes that they find are particularly useful to them as part of their own personal account on the website, as well as add any useful notes to the saved recipes that they might want to remember at a future date that will allow the user to make an informed decision about the recipe and whether it is the right one for them.
                    </li>
                   
                  </ul>
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