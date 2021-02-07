import React from "react";
import { Link } from "react-router-dom";
import css from "./header.css";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  state = {
    search: "",
  };

  onSearch = (event) => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
    this.props.onSearch(value);
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-xl bg-dark navbar-dark">
          <Link className="navbar-brand" to="/">
            Contact List
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item linkasdasd">
                <Link className="nav-link" to="/add">
                  Add contact
                </Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0 float-right">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onSearch}
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
