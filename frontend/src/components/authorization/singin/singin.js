import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../authorization.css";
class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isRedirect: false,
    };
  }

  getLogin = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  getPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  onSendDataUs = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect: true,
    });
    const { username, password } = this.state;

    let newAuth = {
      username: username,
      password: password,
    };
    this.props.getAuthorization(newAuth);
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <Fragment>
        <div class="login-page">
          <div class="form box">
            <form class="register-form" onSubmit={this.onSendDataUs}>
              <input
                value={username}
                onChange={this.getLogin}
                type="text"
                id="reg_login"
                className="animateInput"
                placeholder="login"
                autocomplete="username"
                name="username"
                required
              />
              <input
                onChange={this.getPassword}
                type="password"
                id="reg_password"
                className="animateInput"
                placeholder="password"
                name="password"
                autoComplete="current-password"
                required
              />
              <button id="log_btn" className="btn-auth">
                login
              </button>
              <p className="message">Not registered? </p>
              <Link to="/authorization/sing-up" сlassName="registerSiginIn">
                <span> Create an account</span>
              </Link>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SingIn;
