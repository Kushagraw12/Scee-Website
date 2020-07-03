import React, { Component } from "react";
import { Navbar } from "reactstrap";
import "../css/header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container hh">
            <code> THIS IS A HEADER</code>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
