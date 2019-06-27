import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Container } from "../Grid";


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Navbar style={{ marginBottom: "0px", backgroundColor: "red", height: "75px" }}>
                    <Container>
                        <NavbarBrand style={{ color: "white", textAlign: "center" }}>Created by Alapan,   Jordan, and Marco</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }

}

export default Footer;