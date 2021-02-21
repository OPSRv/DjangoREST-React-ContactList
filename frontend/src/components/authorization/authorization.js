import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./authorization.css";

import SingIn from "./singin/singin";
import SingUp from "./singup/singup";
import Modal from "./modal/modal";

class Authorization extends React.Component {
  getCreateAccount = (newUser) => {
    this.props.getCreateAccount(newUser);
  };
  getAuthorization = (newAuth) => {
    this.props.getAuthorization(newAuth);
  };

  render() {
    console.log(this.props.newAuth, "this.props.newAuth");
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/authorization" render={() => <Modal />} />
            <Route
              exact
              path="/authorization/sing-in"
              render={() => <SingIn getAuthorization={this.getAuthorization} />}
            />
            <Route
              exact
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
