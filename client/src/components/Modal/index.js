import React, { Component } from "react";
// import "./style.css";
import { Modal, ModalCardHeader, ModalCard,ModalBackground, Button, Delete, ModalCardTitle, ModalCardBody, ModalCardFooter } from "bloomer";




class Modal1 extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader>
                        <ModalCardTitle>ModalCard Title</ModalCardTitle>
                        <Delete />
                    </ModalCardHeader>
                    <ModalCardBody>
                     <h1>Testing 123</h1>
                    </ModalCardBody>
                    <ModalCardFooter>
                        <Button isColor='success'>Save</Button>
                        <Button isColor='warning'>Cancel</Button>
                    </ModalCardFooter>
                </ModalCard>
            </Modal>
        );
    }
}

export default Modal1;