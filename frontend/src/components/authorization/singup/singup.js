import { Redirect } from "react-router-dom";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../authorization.css";

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      isRedirect: false,
    };
  }

  getLogin = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
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
    const { username, email, password } = this.state;

    let newUser = {
      username: username,
      email: email,
      password: password,
    };
    console.log(newUser, "newUser SING UP");
    this.props.getCreateAccount(newUser);
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/authorization" />;
    }
    const { username, email, password } = this.state;
    return (
      <Fragment>
        <div class="login-page">
          <div class="form box">
            <form className="register-form" onSubmit={this.onSendDataUs}>
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
                value={email}
                onChange={this.getEmail}
                id="reg_email"
                className="animateInput"
                placeholder="email address"
                name="email"
                autocomplete="username email"
                type="email"
                required
              />

              <input
                value={password}
                onChange={this.getPassword}
                type="password"
                id="reg_password"
                className="animateInput"
                placeholder="password"
                name="password"
                autoComplete="current-password"
                required
              />
              <button id="reg_btn" className="btn-auth">
                create
              </button>
              <p className="message">
                Already registered?{" "}
                <Link to="/authorization" className="registerSiginIn">
                  <span id="crateAccount">Sign In</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default SingUp;
