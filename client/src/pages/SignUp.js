import React, { Component } from "react";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Jumbotron from "../Components/Jumbotron";
import Card from "../Components/Card";
// import SavedBookDetail from "../Components/SavedRecipeDetail";
// import API from "../utils/API";


class SignUp extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                    </Jumbotron>

                    <Row>
                        <Col size="md-12">

                            <Card heading="Sign Up">
                                <h1>This is where the sign-up forms should go</h1>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }


}
export default SignUp;
