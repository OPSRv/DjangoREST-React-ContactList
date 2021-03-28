import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Authorization from "../authorization/authorization";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  getClearLocalStorage = (event) => {
    localStorage.clear();
  };

  // https://medium.com/@jxstanford/django-rest-framework-file-upload-e4bc8de669c0#.o2cqt4wl1

  render() {
    const { authorization } = this.props;

    const { username, isAuthenticated } = authorization;

    return (
      <div className="dashboard">
        <div className="dashboard-font-icons">
          {isAuthenticated ? (
            <Link to="/authorization" onClick={this.getClearLocalStorage}>
              <i class="fas fa-sign-in-alt dashboard-icons" title="Log out"></i>
            </Link>
          ) : (
            <Link to="/authorization/sing-in">
              <i class="fas fa-user-plus dashboard-icons"></i>
            </Link>
          )}
        </div>

        {isAuthenticated ? (
          <div className="user">
            <p>Signed in as</p>
            <h3>{username}</h3>
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
        ) : (
          <h2></h2>
        )}

        {isAuthenticated ? (
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
        ) : (
          <h2></h2>
        )}
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
const mapStateToProps = ({ ContactListReducer }) => {
  const { authorization } = ContactListReducer;
  return { authorization };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
