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
        <div>
          Cat Next in Queue
          <Cat />        
        </div>

        <div>
          Dog Next in Queue
          <Dog />
        </div>
      </>
    );
  }
}

export default Adoption;
