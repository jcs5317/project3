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
                    <div id="x"><img src="https://www.xing.com/img/custom/communities/communities_files/c/b/7/64695/large/Healthy-Living-Icon-small.png?1533893961" alt="health img" /></div>
                  </Col>
                </div>

                <Col size="md-12">
                  <ul style={{ fontSize: "25px", listStyle: "none" }}>
                    <li >Welcome to a recipe finder that helps you find and save your favorite recipes. 
                  </li>
                    <br />
                    <li>You can search for recipes based on specific search criteria. For example you can seach for a specific ingredient (tomato or chicken, etc.), a category (lunch or casserole, etc.) or even a dietary need (vegetarian or vegan, etc.).
                      </li>
                    <br />
                    <li>You will also be able to create your own personal account to save your favorite recipes and you can even add a special note to each recipe to give it your own special twist!
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