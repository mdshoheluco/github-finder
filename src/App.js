import React, { Component } from 'react';
import './App.css';

class App extends Component {
  printName = () => 'Sanfeer';
  render() {
    // const name = 'Sanfeer';
    const loading = false;
    const showName = true;
    return (
      <React.Fragment>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Hello {showName && this.printName()}</h1>
        )}
      </React.Fragment>
    );
  }
}

export default App;
