import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./authorization.css";

import SingIn from "./singin/singin";
import SingUp from "./singup/singup";
import AuthForm from "./modal/modal";
import { connect } from "react-redux";

const Authorization = ({ authorization }) => {
  if (authorization.isAuthenticated) {
    return <Redirect to="/" render={() => <ContactList />} />;
  }

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/authorization" render={() => <AuthForm />} />
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

const mapStateToProps = ({ ContactListReducer }) => {
  const { authorization } = ContactListReducer;
  return { authorization };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
