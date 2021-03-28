import React, { Fragment } from "react";
import "./contact-list.css";
import ApiService from "../../Services/ApiService";
// actions
import { getContactList } from "../../Actions/ContactListActions";
import { isStars } from "../../Actions/ContactListActions";
import { DeleteContact } from "../../Actions/ContactListActions";
import { updateContact } from "../../Actions/ContactListActions";

import ContactItem from "./contact-item/contact-item";
import Spinner from "../Spinner/Spinner";

import { connect } from "react-redux";

class ContactList extends React.Component {
  componentDidMount() {
    const { getContactList } = this.props;
    const { authorization } = this.props;
    if (authorization.isAuthenticated) {
      getContactList();
    }
  }

  onShowContactList = () => {
    const { List, findContact } = this.props;
    if (findContact.length === 0) {
      return List;
    }
    return List.filter((item) => {
      return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
    });
  };

  isStar = (id) => {
    const { List, findContact } = this.props;
    const index = List.findIndex((elem) => elem.id === id);
    const tmp = List.slice();
    tmp[index].star = !tmp[index].star;
    const data = tmp[index];
    isStars(data);
  };

  onDeleteContact = (id) => {
    const { List, findContact } = this.props;
    const index = List.findIndex((elem) => elem.id === id);
    const partOne = List.slice(0, index);
    const partTwo = List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    DeleteContact(id);
  };

  editContact = (id) => {
    localStorage.setItem("currentContact", id);
    updateContact(id);
  };

  render() {
    const { List, loading } = this.props;
    const showContacts = this.onShowContactList(List);

    if (!loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <div class="cards">
          {showContacts.length !== 0 ? (
            showContacts.map((item) => {
              return (
                <ContactItem
                  key={item.id}
                  user_id={item.user_id}
                  name={item.name}
                  gender={item.gender}
                  address={item.address}
                  image={item.image}
                  phone={item.phone}
                  email={item.email}
                  star={item.star}
                  isStar={() => this.isStar(item.id)}
                  editContact={() => this.editContact(item.id)}
                  onDeleteContact={() => this.onDeleteContact(item.id)}
                  addContact={() => this.addContact(item.id)}
                />
              );
            })
          ) : (
            <h2>Contact list is empty.</h2>
          )}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ ContactListReducer }) => {
  const { List, loading, authorization, findContact } = ContactListReducer;
  return { List, loading, authorization, findContact };
};

const mapDispatchToProps = {
  getContactList,
  isStars,
  DeleteContact,
  updateContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
