import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { Route, Link } from "react-router-dom";
import Adoption from "./Adoption";
import HomePage from "./HomePage";

class App extends Component {
  handleAdoption = () => {};
  render() {
    return (
      <>
        <Header />
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/adoption"} component={Adoption} />

        {/* <Route path={'/adoption/pets'} component={Pet} /> */}
      </>
    );
  }
}

export default App;
