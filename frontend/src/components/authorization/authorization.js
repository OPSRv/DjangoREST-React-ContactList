import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./authorization.css";
import axios from "axios";

import SingIn from "./singin/singin";
import SingUp from "./singup/singup";

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getAccount: true,
    };
  }

  getCreateAccount = (newUser) => {
    console.log(newUser, "newUser - authorization");
    let createUser = newUser;
    console.log(createUser);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/register/",
      data: createUser,
    })
      .then(function (response) {
        console.log(response, "response - Вітаю");
      })
      .catch(function (error) {
        console.log(error, "error");
      });
  };

  getAuthorization = (newAuth) => {
    let userAuth = newAuth;

    console.log(userAuth, "userAuth - authorization");
    localStorage.setItem("user_name", `${userAuth.username}`);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/login/",
      data: userAuth,
    })
      .then(function (response) {
        localStorage.setItem("token", `Bearer ${response.data.access}`);
        console.log(response.data.access, "response - Вітаю");
      })
      .catch(function (error) {
        console.log(error, "error");
      });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/authorization"
              render={() => <SingIn getAuthorization={this.getAuthorization} />}
            />
            <Route
              path="/authorization/sing-up"
              render={() => <SingUp getCreateAccount={this.getCreateAccount} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Authorization;
