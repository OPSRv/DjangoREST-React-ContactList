import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  // state = {
  //   username: '',
  //   token: ,
  // };

  render() {
    return (
      <div className="dashboard">
        <div className="user">
          <p>Signed in as</p>
          <h3>{localStorage.username}</h3>
          <img
            src="../../../static/img/user.svg"
            alt=""
            className="user-avatar"
          />
          <img
            src="../../../static/img/edit.svg"
            alt=""
            className="images-edit "
          />
        </div>
        <div className="links">
          <div className="link">
            <img
              src="../../../static/img/home.svg"
              alt=""
              className="add-images"
            />
            <Link className="dash-link" to="/">
              <h2 className="dash-links">Home</h2>
            </Link>
          </div>

          <div className="link">
            <img
              src="../../../static/img/add.svg"
              alt=""
              className="add-images"
            />
            <Link className="dash-link" to="/add">
              <h2 className="dash-links">Add contact</h2>
            </Link>
          </div>
        </div>
        <h3>Please log in</h3>

        <div className="wrapper pro">
          <h2>Join for ReactJS</h2>
          <img
            src="../../../static/img/react.svg"
            alt=""
            className="back react-logo"
          />
          <img
            src="../../../static/img/react.svg"
            alt=""
            className="front react-logo"
          />
        </div>
      </div>
    );
  }
}
export default Dashboard;
