import React, {Component} from "react";
import {Container} from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Nav from "../Components/Nav";

import Modal1 from "../Components/Modal";

class Logout extends Component{
    componentDidMount(){
        sessionStorage.clear(); 

    }

    render(){
        return(
            <div>
            <Nav signedIn={false} />
                <Container>
                    <Jumbotron />
                <h1>Logged out</h1>
                </Container>
           <Modal1>
               
           </Modal1>

           
             
            </div>
        )
    }
}

export default Logout;