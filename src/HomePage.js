import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <>
        <div>Explanation of Site - Landing Page Info</div>
        <Link to="/adoption">Adopt a Pet!</Link>{" "}
      </>
    );
  }
}

export default HomePage;
