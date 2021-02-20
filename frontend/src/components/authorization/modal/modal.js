import { Link } from "react-router-dom";
import React from "react";
import "./modal.css";

const display = {
  display: "block",
};
const hide = {
  display: "none",
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: true,
    };
  }

  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div class="login-page">
        <div class="form box">
          <div className="modal" style={this.state.toggle ? display : hide}>
            <div className="modal-content">
              <h1 className="modal-head">Hello! </h1>
              <h2 className="model-text">
                You need to log in or register at the link:
              </h2>
              <div id="modal_link">
                <Link
                  to="/authorization/sing-in"
                  id="_registerSiginIn"
                  onClick={this.toggle}
                >
                  Sing in
                </Link>

                <Link
                  to="/authorization/sing-up"
                  id="registerSiginIn"
                  onClick={this.toggle}
                >
                  Sing up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
