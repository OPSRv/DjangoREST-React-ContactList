import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      loginСompleted: "",
    };
  }

  getClearLocalStorage = (event) => {
    localStorage.clear();
  };

  componentDidMount() {
    this.updataList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.loginСompleted !== prevProps.loginСompleted) {
      this.updataList();
      this.setState({
        username: localStorage.username,
      });
    }
  }

  updataList = () => {
    const { loginСompleted } = this.props;
    console.log(loginСompleted, "loginСompleted");
    if (!loginСompleted) {
      return;
    }
    this.setState({
      username: localStorage.username,
    });
  };

  render() {
    const { username, loginСompleted } = this.props;
    console.log(this.props.loginСompleted, "this.props DACH");
    return (
      <div className="dashboard">
        <div className="dashboard-font-icons">
          {!loginСompleted ? (
            <Link to="/authorization/sing-in">
              <i class="fas fa-user-plus dashboard-icons"></i>
            </Link>
          ) : (
            <Link to="/authorization" onClick={this.getClearLocalStorage}>
              <i class="fas fa-sign-in-alt dashboard-icons" title="Log out"></i>
            </Link>
          )}
        </div>

        {loginСompleted ? (
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

        {loginСompleted ? (
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
export default Dashboard;
