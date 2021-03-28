import React from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

// Include components
import ContactList from "./components/contact-list/contact-list";
import EditContact from "./components/edit-contact/edit-contact";
import NotFound from "./components/notFound/notFound";
import Header from "./components/header/header";
import AddContact from "./components/add-contact/add-contact";
import Dashboard from "./components/dashboard/dashboard";
import Authorization from "./components/authorization/authorization";

// Import store
import store from "./store";
import { Provider } from "react-redux";

import history from "./history";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Dashboard />
          <Switch>
            <div class="games">
              <Route exact path="/" render={() => <Header />} />
              <Route
                exact
                path="/authorization"
                render={() => <Authorization />}
              />
              <Route exact path="/" render={() => <ContactList />} />
              <Route exact path="/add" render={() => <AddContact />} />
              <Route exact path="/edit" render={() => <EditContact />} />
            </div>
            <Route component={NotFound} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
