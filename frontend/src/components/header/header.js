import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { connect } from "react-redux";
import { onSearch } from "../../Actions/ContactListActions";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: "",
  };

  onShowContactList = (event) => {
    const findContact = event.target.value;
    onSearch(findContact);
  };

  render() {
    return (
      <div className="status">
        <Link to="/" className="contact-link">
          <h1>Contact List</h1>
        </Link>
        <input type="search" onChange={this.onShowContactList} />
      </div>
    );
  }
}

const mapStateToProps = ({ ContactListReducer }) => {};

const mapDispatchToProps = (dispatch) => {
  onSearch;
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
