import React from "react";
import { Redirect } from "react-router-dom";
import ContactDataService from "../services/Service";

class AddContact extends React.Component {
  state = {};

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

    const { name, address, phone, email, image, gender } = this.state;
    console.log(this.state);
    const data = {
      name: name,
      phone: phone,
      image: image,
      gender: gender,
      address: address,
      email: email,
      star: true,
    };

    ContactDataService.create(data).then((response) => {
      this.setState({
        isRedirect: true,
      });
      console.log(response);
    });
  };

  render() {
    console.log("currentContact =>", this.props.currentContact);
    const { name, address, phone, email, image, gender } = this.state;
    console.log("Avatar => ", image);
    console.log(this.image === undefined);
    const URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <form onSubmit={this.onSendData}>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={this.getName}
                required
                placeholder="Enter name"
              />
              <input
                type="text"
                value={address}
                className="form-control"
                onChange={this.getAddress}
                required
                placeholder="Enter address"
              />
              <input
                type="text"
                value={gender}
                className="form-control"
                onChange={this.getGender}
                required
                placeholder="Enter gender"
              />
              <input
                type="number"
                min="1"
                max="99"
                value={image}
                className="form-control"
                onChange={this.getAvatar}
                required
              />
              <input
                type="email"
                value={email}
                className="form-control"
                onChange={this.getEmail}
                required
                placeholder="Enter email"
              />
              <input
                type="text"
                value={phone}
                className="form-control"
                onChange={this.getTelNumber}
                required
                placeholder="Enter phone"
              />
              <button className="btn btn-success" type="submit">
                Save chages
              </button>
            </form>
          </div>
          <div className="col-md-2">
            {image !== undefined ? (
              <img
                className="rounded-circle mx-auto d-block img-fluid edit_photo"
                src={URL}
              />
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
