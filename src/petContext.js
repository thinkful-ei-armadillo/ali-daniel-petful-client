import React, { Component } from 'react';

const PetContext = React.createContext({
    imageURL: '',
    imageDescription: '',
    name: '',
    sex: '',
    age: null,
    breed: '',
    story: '',
    setPet: () => {}
})

export default PetContext;

export class PetProvider extends Component {
  state = {
    pet: null,
    error: null
  }

  setPet = (pet) => {
    this.setState({ pet })
  }

  render() {
    const value = {
      pet: this.state.pet,
      error: this.state.error,
      setPet: this.state.setPet
    }
  return (
    <PetContext.Provider value={value}>
      {this.props.children}
    </PetContext.Provider>
  )
  }
}