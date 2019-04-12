import React, { Component } from "react";

class Adoption extends Component {
  deleteCat = () => {};

  render() {
    return (
      <>
        <div>
          Cat Next in Queue
          <button onClick={deleteCat}>Adopt Cat!</button>
        </div>

        <div>
          Dog Next in Queue
          <button onClick={deleteDog}>Adopt a Dog!</button>
        </div>
      </>
    );
  }
}

export default Adoption;
