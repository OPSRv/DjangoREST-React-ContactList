import React from "react";
import { Redirect } from "react-router-dom";
import ContactDataService from "../services/Service";
import "./edit-contact.css";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    address: this.props.currentContact.address,
    gender: this.props.currentContact.gender,
    phone: this.props.currentContact.phone,
    email: this.props.currentContact.email,
    image: this.props.currentContact.image,
    star: this.props.currentContact.star,
    user_id: this.props.currentContact.user_id,
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
    const { id, name, address, phone, email, image, gender, star } = this.state;
    const data = this.state;
    delete data.isRedirect;
    console.log(data, "data -  в батьківський");
    let newEditContact = data;
    console.log(newEditContact, "newEditContact");
    this.props.onEditCurrentContact(newEditContact);

    ContactDataService.update(id, data);

    this.setState({
      isRedirect: true,
    });
  };

  render() {
    const { name, address, phone, email, image, gender } = this.state;
    const URL = `https://api.randomuser.me/portraits/${gender}/${image}.jpg`;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <h1>Edit contact</h1>
        <div className="row">
          <div>
            {image.length !== 0 ? (
              <img className="edit-image" src={URL} />
            ) : (
              <h3>No foto</h3>
            )}
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

export default EditContact;
