import React from "react";
import { Redirect } from "react-router-dom";
import ApiService from "../../Services/ApiService";
import "./add-contact.css";
import { addContacts } from "../../Actions/ContactListActions";

import { connect } from "react-redux";

class AddContact extends React.Component {
  state = {
    name: "Kelly",
    phone: "+380978324567",
    image: "43",
    gender: "women",
    address: "Rivne, Soborna, 1",
    email: "Kelly@gmail.com",
    star: false,
    isRedirect: false,
    isAuthenticated: true,
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

  getGenderMen = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  getGenderWomen = (event) => {
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

    addContacts(newContact);

    this.setState({
      isRedirect: true,
    });
  };

  componentDidMount() {}

  render() {
    const {
      name,
      address,
      phone,
      email,
      image,
      gender,
      star,
      isAuthenticated,
    } = this.state;
    const URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;

    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="add-wrapper">
        <div className="add-head">
          <h1>Add contact</h1>
        </div>
        {isAuthenticated ? (
          <div className="container">
            <div className="row">
              <div className="add-form">
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
                  <button
                    className="btn_choose_sent bg_btn_chose_3 btn-save"
                    type="submit"
                  >
                    Add contact
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-2">
              <img className="edit-image" src={URL} />
              <div className="add-radio-btn">
                <button
                  type="button"
                  class="btn_choose_sent bg_btn_chose_3"
                  onChange={this.getGenderMen}
                  value="men"
                >
                  <input
                    type="radio"
                    id="contact-men"
                    name="contact"
                    value="men"
                    onChange={this.getGenderMen}
                  />
                  Men
                </button>
                <button
                  type="button"
                  class="btn_choose_sent bg_btn_chose_3"
                  onChange={this.getGenderWomen}
                  value="women"
                >
                  <input
                    type="radio"
                    id="contact-women"
                    name="contact"
                    value="women"
                    onChange={this.getGenderWomen}
                  />
                  Women
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="authorization/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ ContactListReducer }) => {};

const mapDispatchToProps = {
  addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
