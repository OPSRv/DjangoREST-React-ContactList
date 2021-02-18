import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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
import Authorization from "./components/authorization/authorization";

import axios from "axios";

class App extends React.Component {
  URL = "http://127.0.0.1:8000/api/contacts";

  constructor(props) {
    super(props);
    const { username, user_id, loginСompleted } = localStorage;
    this.state = {
      List: [],
      currentContact: "",
      findContact: "",
      authorization: "",
      username: username,
      user_id: user_id,
      loginСompleted: loginСompleted,
    };
  }

  componentDidMount() {
    this.UpdateContactList();
  }

  UpdateContactList = () => {
    if (this.state.loginСompleted) {
      const token = localStorage.token;
      fetch(this.URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          if (data == null) {
            this.setState({
              List: [],
            });
          } else {
            if (data.detail == "Signature has expired.") {
              console.log("asasasdad");
            }
            this.setState({
              List: data,
            });
          }
        })
        .catch((err) => console.log(err));
    }
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
    console.log(currentContact, "currentContact- EDIT");
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
    console.log(this.state.List, "this.state.List - INDEX");
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

  getCreateAccount = (newUser) => {
    console.log(newUser, "newUser - authorization");
    let createUser = newUser;
    console.log(createUser, "createUser - getCreateAccount - INDEX");
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/register/",
      data: createUser,
    })
      .then(function (response) {
        console.log(response.status, "getCreateAccount - response - Вітаю");
      })
      .catch(function (error) {
        console.log(error, "error getCreateAccount - INDEX");
      });
  };

  getAuthorization = (newAuth) => {
    console.log(newAuth);
    let userAuth = newAuth;
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/login/",
      data: userAuth,
    })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", `Bearer ${response.data.access}`);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("loginСompleted", true);
        console.log(
          response.data.access,
          "response - getAuthorization - INDEX"
        );
      })
      .catch(function (error) {
        console.log(error, "error - getAuthorization - INDEX");
      });
    this.setState({
      username: localStorage.username,
      user_id: localStorage.user_id,
      loginСompleted: localStorage.loginСompleted,
    });
  };

  render() {
    const showContacts = this.onShowContactList(
      this.state.List,
      this.state.findContact
    );
    const { loginСompleted } = this.state;

    return (
      <Router>
        <Dashboard />
        <Switch>
          <div class="games">
            {loginСompleted ? <Header onSearch={this.onSearch} /> : <h1></h1>}

            <Route
              path="/authorization"
              render={() => (
                <Authorization
                  getCreateAccount={this.getCreateAccount}
                  getAuthorization={this.getAuthorization}
                />
              )}
            />

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

// incrementCounter = () => this.setState((prevState) => ({ counter: prevState.counter + 1 }));
// const MyPureComponent = (props) => <div>Less code === less support</div>

// Ошибка связанная с безопасностью. Для меня выглядит очень странно, что люди до сих пор делают эту ошибку. Очень много людей написало очень много статей на эту тему в 2017.
// Если вы создаете ссылку с target='_blank' атрибутом не забудьте добавить к ней rel='noreferrer noopener'. Очень просто:

// <a href="https://example.com" target="_blank" rel="noreferrer noopener" />
