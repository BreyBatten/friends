import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  render() {
    return (
      <div className="App">
        <p>Hi, I'm a React App</p>
      </div>
    );
  }
}

export default App;
