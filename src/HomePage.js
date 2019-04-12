import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <>
        <div className='petful-info'>
          <p>Petful is an animal adoption tool - we have many cute puppies and kittens for you to adopt!</p>
          <p>Simply click the link below and select the dog or cat you would like to adopt.</p>
        </div>
        <Link to="/adoption">Adopt a Pet!</Link>{" "}
      </>
    );
  }
}

export default HomePage;
