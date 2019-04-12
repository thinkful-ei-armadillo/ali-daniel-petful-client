import React, { Component } from "react";
import config from "./config";
import './cat.css';

export default class Cat extends Component {
  
  state = {
    imageURL: null,
    sex: "",
    age: null,
    breed: "",
    story: "",
    imageDescription: "",
    adopterName: ""
  };

  getCat = () => {
    fetch(`${config.API_ENDPOINT}/cat`, {
      method: "GET",
      header: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
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
  };

  handleAdoption(event) {
    return fetch(`${config.API_ENDPOINT}/cat`, {
      method: "DELETE"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ adopterName: res });
        this.getCat();
      })
      .catch(err => {
        return new Error(err);
      });
  }

  render() {
    let content = (
      <>
        <h2>{this.state.name}</h2>
        <img src={this.state.imageURL} alt={this.state.imageDescription} id='cat-pic'/>
        <ul className='cat-info'>
          <li>Gender: {this.state.sex}</li>
          <li>Age: {this.state.age}</li>
          <li>Breed: {this.state.breed}</li>
          <li>Story: {this.state.story}</li>
          <li> {!this.state.adopterName ? null : 'Last Pet Adopted By ' + this.state.adopterName} </li>
        </ul>
      </>)
    return (
      <div className="pet-wrapper">
        {!this.state.imageURL ? this.getCat() : content}
        <button className="adopt-button" onClick={e => this.handleAdoption(e)}>
          Adopt!
        </button>
      </div>
    );
  }
}
