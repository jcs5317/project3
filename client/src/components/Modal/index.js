import React from "react";
// import "./style.css";
import { Button, Modal as RModal, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';


function Modal(props) {

    return (
       <RModal show={true}>
           <ModalHeader>
               <h1>Test test ....</h1>
           </ModalHeader>
           <ModalBody>
               <p>testing 123</p>
           </ModalBody>
           <ModalFooter>
               <Button type="save">Save</Button>
               <Button type="delete">Delete</Button>
           </ModalFooter>
       </RModal>
    );
}

export default Modal;