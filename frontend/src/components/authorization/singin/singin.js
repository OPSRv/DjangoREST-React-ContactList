import React, { useState } from "react";
import "../authorization.css";
//redux
import { connect } from "react-redux";
import { singIn } from "../../../Actions/ContactListActions";

// https://reactrouter.com/web/example/auth-workflow

import { BrowserRouter as Router, Link } from "react-router-dom";

const SingIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toogle = (event) => {
    setUsername(username);
    setPassword(password);
  };

  const onSendDataUs = (event) => {
    event.preventDefault();
    let newAuth = {
      username: username,
      password: password,
    };
    singIn(newAuth);
  };

  return (
    <React.Fragment>
      <div class="login-page">
        <div class="form box">
          <form class="register-form" onSubmit={onSendDataUs}>
            <input
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              id="reg_login"
              className="animateInput"
              placeholder="login"
              autocomplete="username"
              name="username"
              required
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
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
            <Link to="/authorization/sing-up" id="_register">
              Create an account
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  singIn,
};
export default connect(null, mapDispatchToProps)(SingIn);
