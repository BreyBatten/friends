import React from 'react';
import './App.css';
import Axios from 'axios';
import FriendsList from './components/FriendsList'

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
        <h1>Friends List</h1>
        {this.state.friends.map(friend => {
          return (
            <FriendsList key={friend.id} id={friend.id} name={friend.name} age={friend.age} email={friend.email} />
          )
        })}
      </div>
    );
  }
}

export default App;
