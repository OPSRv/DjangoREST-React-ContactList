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
    this.props.getCreateAccount(newUser);
  };
  getAuthorization = (newAuth) => {
    this.props.getAuthorization(newAuth);
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <div class="login-page">
              <div class="form box">
                <Route
                  exact
                  path="/authorization"
                  render={() => (
                    <SingIn getAuthorization={this.getAuthorization} />
                  )}
                />
                <Route
                  path="/authorization/sing-up"
                  render={() => (
                    <SingUp getCreateAccount={this.getCreateAccount} />
                  )}
                />
              </div>
            </div>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Authorization;
