import React, { useState } from "react";
import ApiService from "../../../Services/ApiService";
import "../authorization.css";
//redux
import { connect } from "react-redux";
import { getAuth } from "../../../Actions/ContactListActions";

// https://reactrouter.com/web/example/auth-workflow

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const SingIn = ({ authorization, loading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthenticated, setisAuthenticated] = useState(
    authorization.isAuthenticated
  );

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

    ApiService.authorization(newAuth)
      .then(function (response) {
        localStorage.setItem("token", `Bearer ${response.data.access}`);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user_id", response.data.user_id);

        authorization = {
          token: response.data.access,
          username: response.data.username,
          user_id: response.data.user_id,
          isAuthenticated: true,
        };
        setisAuthenticated(!isAuthenticated);
        getAuth(authorization);
      })
      .catch(function (error) {
        alert("Please try again");
      });
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/" render={() => <ContactList />} />;
  // }

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

const mapStateToProps = ({ ContactListReducer }) => {
  const { authorization, loading } = ContactListReducer;
  return { authorization, loading };
};

const mapDispatchToProps = (dispatch) => {
  return dispatch(() => getAuth);
};
export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
