import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./authorization.css";

import SingIn from "./singin/singin";
import SingUp from "./singup/singup";
import Modal from "./modal/modal";

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
            <Route exact path="/authorization" render={() => <Modal />} />
            <Route
              exact
              path="/authorization/sing-in"
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
