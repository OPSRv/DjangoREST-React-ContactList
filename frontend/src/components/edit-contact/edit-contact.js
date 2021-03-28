import React from "react";
import { Redirect } from "react-router-dom";
import ApiService from "../../Services/ApiService";
import "./edit-contact.css";

import { connect } from "react-redux";

import { saveEditContact } from "../../Actions/ContactListActions";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact[0].id,
    user_id: this.props.currentContact[0].user_id,
    name: this.props.currentContact[0].name,
    address: this.props.currentContact[0].address,
    phone: this.props.currentContact[0].phone,
    email: this.props.currentContact[0].email,
    image: this.props.currentContact[0].image,
    gender: this.props.currentContact[0].gender,
    star: this.props.currentContact[0].star,
    isRedirect: false,
  };

  getAvatar = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  getTelNumber = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  getAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  getGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  onSendData = (event) => {
    event.preventDefault();
    const data = this.state;
    delete data.isRedirect;
    saveEditContact(data);

    this.setState({
      isRedirect: true,
    });
  };

  render() {
    const { name, address, phone, email, image, gender } = this.state;
    const currentContact = JSON.parse(localStorage.getItem("currentContact"));
    const update = () => updateContact(currentContact);
    const URL = `https://api.randomuser.me/portraits/${gender}/${image}.jpg`;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <h1>Edit contact</h1>
        <div className="row">
          <div>
            <img className="edit-image" src={URL} />
          </div>
          <div className="edit-status">
            <form onSubmit={this.onSendData}>
              <input
                type="text"
                value={name}
                placeholder="name"
                className="edit-input"
                onChange={this.getName}
                required
              />
              <input
                type="text"
                value={address}
                placeholder="address"
                className="edit-input"
                onChange={this.getAddress}
                required
              />
              <input
                type="number"
                min="1"
                max="99"
                value={image}
                placeholder="image"
                className="edit-input"
                onChange={this.getAvatar}
                required
              />
              <input
                type="text"
                value={email}
                placeholder="email"
                className="edit-input"
                onChange={this.getEmail}
                required
              />
              <input
                type="text"
                value={phone}
                placeholder="phone"
                className="edit-input"
                onChange={this.getTelNumber}
                required
              />
              <input
                type="text"
                value={gender}
                placeholder="gender"
                className="edit-input"
                onChange={this.getGender}
                required
              />
              <button className="btn-save" type="submit">
                Save chages
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ContactListReducer }) => {
  const { currentContact } = ContactListReducer;
  return { currentContact };
};

const mapDispatchToProps = {
  saveEditContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
