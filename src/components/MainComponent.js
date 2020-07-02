import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../css/App.css";
import Header from "./headerComponent";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <img src={logo} height="400" width="700" alt="logo" />
          <p>
            <code>
              WELCOME TO SOCIETY OF CIVIL AND ENVIRONMENTAL ENGIENEERS
            </code>
          </p>
        </header>
      </div>
    );
  }
}

export default Main;
