import React, { Component } from "react";
import { Container } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Nav from "../Components/Nav";

class Logout extends Component {
    componentDidMount() {
        sessionStorage.clear();

    }

    render() {
        return (
            <div>
                <Nav signedIn={false} />
                <Container>
                    <Jumbotron />
                    <h1>Logged out</h1>
                </Container>
            </div>
        )
    }
}

export default Logout;