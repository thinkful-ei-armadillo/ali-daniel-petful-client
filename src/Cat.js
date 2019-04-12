import React, { Component } from "react";
import API_ENDPOINT from './config';

export default class Cat extends Component {
  // props = this.state

  getCat = () => {
    fetch(`${API_ENDPOINT}/cat`, {
      method: 'GET',
      header: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      // const animal = res.json();
      console.log(res);
    })
    .catch(err => {
      return new Error(err);
    })

    let content = <>
      <h2>{this.name}</h2>
        <img src={this.imageURL} alt={this.imageDescription}/>
        <dl>
          <dt>Gender</dt>
          <dd>{this.sex}</dd>
          <dt>Age</dt>
          <dd>{this.age}</dd>
          <dt>Breed</dt>
          <dd>{this.breed}</dd>
          <dt>Story</dt>
          <dd>{this.story}</dd>
        </dl>
    </>
    return content
  }


  handleAdoption(event) {
    event.preventDefault();

    return fetch(`${API_ENDPOINT}/cat`, {
      method: 'DELETE',
      header: {
        'content-type': 'application/json'
      }
    })
    .catch(err => {
      return new Error(err);
    })
  }


  render() {
    return (
      <div className='pet-wrapper'>
        {this.getCat()}
        <button 
        className='adopt-button'
        onSubmit={(e) => this.handleAdoption(e)}
        >Adopt</button>
      </div>
    );
  }
}