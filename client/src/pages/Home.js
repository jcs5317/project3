import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components/Footer";
import { Col, Container, Row } from "../Components/Grid";
import Card from "../Components/Card";
import Nav from "../Components/Nav";

// import API from "../utils/API";
// import axios from "axios";

class Home extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     loggedIn: false,
  //     username: null
  //   }

  //   this.getUser = this.getUser.bind(this)
  //   this.componentDidMount = this.componentDidMount.bind(this)
  //   this.updateUser = this.updateUser.bind(this)
  // }

  // componentDidMount() {
  //   this.getUser()
  // }

  // updateUser (userObject) {
  //   this.setState(userObject)
  // }

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }


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
                  <a id="x"><img src="https://www.xing.com/img/custom/communities/communities_files/c/b/7/64695/large/Healthy-Living-Icon-small.png?1533893961" /></a>
                </Col>
                </div>
              
                <Col size="md-12">          
                <h4> This app is a simple and easy to use platform for users to search and find recipes of all their delicacies. Not only that, but users will also be able to find out recipes of foods that will be tailored to their personal requirements such as allergies, vegetarian/non-vegetarian needs, and lifestyle choices.</h4>
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