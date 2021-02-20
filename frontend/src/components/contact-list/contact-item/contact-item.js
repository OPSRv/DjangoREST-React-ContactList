import React from "react";
import { Link } from "react-router-dom";
import ContactDataService from "../../services/Service";
import "./contact-item.css";

class ContactItem extends React.Component {
  render() {
    // console.log("Inside contact item => ", this.props);
    const {
      name,
      gender,
      address,
      phone,
      email,
      image,
      star,
      isStar,
      editContact,
      onDeleteContact,
    } = this.props;

    const URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
    // console.log(this.props.star);
    let isNotstar = "far fa-star ";
    if (star) {
      isNotstar = "fas fa-star ";
    } else {
      isNotstar = "far fa-star";
    }
    return (
      <div class="card">
        <div>
          <img src={URL} alt="avatar" className="avatar" />
        </div>
        <div class="card-info">
          <h2>{name}</h2>
          <p>{address}</p>
          <p className="text-muted small">{phone}</p>
          <p className="text-muted small text-truncate">{email}</p>
        </div>

        <div className="panel">
          <span
            className={`${isNotstar} fa-2x text-success float-right pulse pulse-size`}
            title="online now"
            onClick={isStar}
          ></span>
          <Link to="/edit" className="float-right pulse " onClick={editContact}>
            <i className="far fa-edit fa-2x pulse-size"></i>
          </Link>
          <span
            className="fa fa-trash fa-2x text-danger float-right pulse pulse-size"
            title="Delete"
            onClick={onDeleteContact}
          ></span>
        </div>
      </div>
    );
  }
}

export default ContactItem;
