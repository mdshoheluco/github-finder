import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar icon="fa fa-github" title="Github Finder" />
        <div className="container">
          <Users />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
