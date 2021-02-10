import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

// Include components
import ContactList from "./components/contact-list/constact-list";
import EditContact from "./components/edit-contact/edit-contact";
import NotFound from "./components/notFound/notFound";
import Header from "./components/header/header";
import AddContact from "./components/add-contact/add-contact";
import ContactDataService from "./components/services/Service";
import Dashboard from "./components/dashboard/dashboard";

import axios from "axios";

class App extends React.Component {
  URL = "http://127.0.0.1:8000/api/contacts";
  state = {
    List: [],
    currentContact: "",
    findContact: "",
  };

  componentDidMount() {
    this.UpdateContactList();
  }

  UpdateContactList = () => {
    fetch(this.URL)
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        if (data == null) {
          this.setState({
            List: [],
          });
          // console.log(List, "UpdateContactList - List");
        } else {
          this.setState({
            List: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  onSearch = (contactName) => {
    this.setState({
      findContact: contactName,
    });
  };

  onShowContactList = (List, findContact) => {
    if (findContact.length === 0) {
      return List;
    }
    return List.filter((item) => {
      return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
    });
  };

  isStar = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const tmp = this.state.List.slice();
    tmp[index].star = !tmp[index].star;
    this.setState({
      star: this.tmp,
    });
    const data = tmp[index];
    ContactDataService.update(data.id, data);
  };

  onDeleteContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState((state) => {
      return {
        List: newList,
      };
    });
    ContactDataService.delete(id);
  };

  editContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const currentContact = this.state.List[index];
    this.setState({
      currentContact: currentContact,
    });
    console.log(id, "id");
  };

  onEditCurrentContact = (newEditContact) => {
    const id = newEditContact.id;
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, newEditContact, ...partTwo];
    this.setState({
      List: newList,
    });
  };

  addContact = (newContact) => {
    this.state.List.push(newContact);
    ContactDataService.create(newContact);

    // console.log(newContact.email, "newContact email");
    // let ContactList = this.state.List.map((item) => item.email);

    // console.log(ContactList);

    // let isAllValueMatched = true;

    // ContactList.forEach((value) => {
    //   if (value === newContact) {
    //     isAllValueMatched = false;
    //   }
    // });

    // isAllValueMatched ? this.state.List.push(newContact) : console.log("false");
  };

  render() {
    const showContacts = this.onShowContactList(
      this.state.List,
      this.state.findContact
    );
    return (
      <Router>
        <Dashboard />
        <Switch>
          <div class="games">
            <Header onSearch={this.onSearch} />
            <Route
              path="/"
              exact
              render={() => (
                <ContactList
                  ContactList={showContacts}
                  isStar={this.isStar}
                  editContact={this.editContact}
                  onDeleteContact={this.onDeleteContact}
                />
              )}
            />
            <Route
              path="/add"
              exact
              render={() => <AddContact addContact={this.addContact} />}
            />

            <Route
              path="/edit"
              exact
              render={() => (
                <EditContact
                  currentContact={this.state.currentContact}
                  onEditCurrentContact={this.onEditCurrentContact}
                />
              )}
            />
          </div>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
