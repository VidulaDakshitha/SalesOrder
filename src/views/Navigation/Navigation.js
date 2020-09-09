import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a to="/#/main" className="navbar-brand">Shop</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a to="/#/main" className="nav-link" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#/salesmanagement">Sales Management</a>
              </li>
              <li className="nav-item active">
                <a href="/#/offers" className="nav-link" >Offers</a>
              </li>
              <li className="nav-item active">
                <a href="/#/login" className="nav-link" >Login</a>
              </li>
              <li className="nav-item active">
                <a href="/#/register" className="nav-link" >Register</a>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
