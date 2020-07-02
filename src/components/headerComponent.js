import React, { Component } from "react";
import { Navbar } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <code> THIS IS A HEADER</code>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
