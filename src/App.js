import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { Route } from "react-router-dom";
import Adoption from "./Adoption";
import HomePage from "./HomePage";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  // handleAdoption = () => {};

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App_main">
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/adoption"} component={Adoption} />
        </main>
        {/* <Route path={'/adoption/pets'} component={Pet} /> */}
      </div>
    );
  }
}

export default App;
