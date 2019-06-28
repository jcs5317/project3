import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";


class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
          
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Testing 123</p>
          <p>this is all data</p>
          <button type="save" onClick={this.showModal}>
          save
        </button>
          <button className="button isSuccess" type="save" onClick={this.showModal}>
          Save Changes
        </button>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);


export default Dashboard;