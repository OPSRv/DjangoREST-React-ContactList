import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1", // I would use this.props.id for a real world implementation
      imageURI: null,
    };
  }

  buildImgTag() {
    let imgTag = null;
    if (this.state.imageURI !== null)
      imgTag = <img src={this.state.imageURI} alt="" className="user-avatar" />;
    return imgTag;
  }

  readURI(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleChange(e) {
    this.readURI(e); // maybe call this with webworker or async library?
    if (this.props.onChange !== undefined) this.props.onChange(e); // propagate to parent component
    console.log("object");
  }

  render() {
    const imgTag = this.buildImgTag();
    return (
      <div className="dashboard">
        <div className="user">
          {imgTag}
          <img
            src="../../../static/img/user.svg"
            alt=""
            className="user-avatar"
          />
          <img
            src="../../../static/img/edit.svg"
            alt=""
            className="images-edit "
            onChange={this.handleChange.bind(this)}
          />
          <h3>Simo Edwin</h3>
          <p>login executed</p>
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
