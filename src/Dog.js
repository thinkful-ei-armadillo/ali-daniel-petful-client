import React, { Component } from "react";
import config from "./config";

export default class Dog extends Component {
  // props = this.state
  state = {
    imageURL: "",
    sex: "",
    age: null,
    breed: "",
    story: "",
    imageDescription: "",
    adopterName: ""
  };

  getDog = () => {
    fetch(`${config.API_ENDPOINT}/dog`, {
      method: "GET",
      header: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        // res.json()
        // console.log(res);

        this.setState({
          imageURL: res.imageURL,
          sex: res.sex,
          age: res.age,
          breed: res.breed,
          story: res.story,
          imageDescription: res.imageDescription
        });
      })
      .catch(err => {
        return new Error(err);
      });

    let content = (
      <>
        <h2>{this.state.name}</h2>
        <img src={this.state.imageURL} alt={this.state.imageDescription} />
        <dl>
          <dt>Gender</dt>
          <dd>{this.state.sex}</dd>
          <dt>Age</dt>
          <dd>{this.state.age}</dd>
          <dt>Breed</dt>
          <dd>{this.state.breed}</dd>
          <dt>Story</dt>
          <dd>{this.state.story}</dd>
          <dd> Last Pet Adopted By {this.state.adopterName}</dd>
        </dl>
      </>
    );
    return content;
  };

  handleAdoption(event) {
    return fetch(`${config.API_ENDPOINT}/dog`, {
      method: "DELETE"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ adopterName: JSON.stringify(res) });
        this.getDog();
      })
      .catch(err => {
        return new Error(err);
      });
  }

  render() {
    return (
      <div className="pet-wrapper">
        {this.getDog()}
        <button className="adopt-button" onClick={e => this.handleAdoption(e)}>
          Adopt
        </button>
      </div>
    );
  }
}
