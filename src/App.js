import React from 'react';
import './App.css';
import Axios from 'axios';
import FriendsList from './FriendsList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    Axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
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
