import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components/Footer";
import {Col, Container, Row} from "../Components/Grid";
import Card from "../Components/Card";
// import API from "../utils/API";
import axios from "axios";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card heading="Home">
            <h1> This is where we can describe our app</h1>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
           
          
          </Col>
        </Row>
      </Container>
      
         <Footer>
        
        </Footer>
      </div>
     
    );
    
  }
}

export default Home;