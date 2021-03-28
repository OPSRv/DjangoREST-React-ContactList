import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./authorization.css";

import SingIn from "./singin/singin";
import SingUp from "./singup/singup";
import Modal from "./modal/modal";

const Authorization = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/authorization" render={() => <Modal />} />
          <Route
            exact
            path="/authorization/sing-in"
            render={() => <SingIn />}
          />
          <Route
            exact
            path="/authorization/sing-up"
            render={() => <SingUp />}
          />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Authorization;
