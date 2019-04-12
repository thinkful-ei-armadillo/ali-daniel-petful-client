import React, { Component } from "react";
import Dog from './Dog';
import Cat from './Cat';
import PetContext from './petContext';

class Adoption extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = PetContext;


  render() {
    return (
      <>
        <div className='cat'>
          <Cat />        
        </div>
        <br />
        <div className='dog'>
          <Dog />
        </div>
      </>
    );
  }
}

export default Adoption;
