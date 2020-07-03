import React from "react";
//import Header from "./headerComponent";
import Main from "./MainComponent";
import { HashRouter, Route } from "react-router-dom";
import "../css/Main.css";

function Home() {
  return (
    <HashRouter>
      <Route>
        <Main />
      </Route>
    </HashRouter>
  );
}

export default Home;
