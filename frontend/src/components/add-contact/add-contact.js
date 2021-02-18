import React from "react";
import { Redirect } from "react-router-dom";
import ContactDataService from "../services/Service";

class AddContact extends React.Component {
  state = {
    name: "Jack",
    phone: "100223",
    image: "99",
    gender: "women",
    address: "Rivne",
    email: "Jack@Jack.Jack",
    star: false,
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
  getGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  // #save(addContact)
  onSendData = (event) => {
    event.preventDefault();
    const { name, phone, image, gender, address, email, star } = this.state;

    this.setState({
      isRedirect: true,
    });

    let newContact = {
      name: name,
      phone: phone,
      image: image,
      gender: gender,
      address: address,
      email: email,
      user_id: localStorage.user_id,
      star: false,
    };
    console.log(newContact, "newContact");
    this.props.addContact(newContact);
  };

  render() {
    const { name, address, phone, email, image, gender, star } = this.state;

    const URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;

    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <h1>Add contact</h1>
        <div className="row">
          <div className="col-md-10">
            <form onSubmit={this.onSendData}>
              <input
                type="text"
                value={name}
                className="edit-input"
                onChange={this.getName}
                required
                placeholder="Enter name"
              />
              <input
                type="text"
                value={address}
                className="edit-input"
                onChange={this.getAddress}
                required
                placeholder="Enter address"
              />
              <input
                type="text"
                value={gender}
                className="edit-input"
                onChange={this.getGender}
                required
                placeholder="Enter gender"
              />
              <input
                type="number"
                min="1"
                max="99"
                value={image}
                className="edit-input"
                onChange={this.getAvatar}
                required
              />
              <input
                type="email"
                value={email}
                className="edit-input"
                onChange={this.getEmail}
                required
                placeholder="Enter email"
              />
              <input
                type="text"
                value={phone}
                className="edit-input"
                onChange={this.getTelNumber}
                required
                placeholder="Enter phone"
              />
              <button className="btn-save" type="submit">
                Save chages
              </button>
            </form>
          </div>
          <div className="col-md-2">
            {image !== undefined ? (
              <img className="edit-image" src={URL} />
            ) : (
              <h3>No foto</h3>
            )}
            {gender !== "women" && "men" ? (
              <h5>gender: women or men</h5>
            ) : (
              <h5>ok</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
