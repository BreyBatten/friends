import React from 'react';
import Axios from 'axios';

class FriendsListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    addFriendHandler = e => {
        e.preventDefault();
        Axios.post("http://localhost:5000/friends", {
          name: this.state.name,
          age: Number(this.state.age),
          email: this.state.email,
          id: this.props.newId
        })
        .then(res => {
            this.props.refresh();
            this.setState({
                name: "",
                age: "",
                email: "",
                id: ""
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <form onSubmit={this.addFriendHandler}>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="name"
                    name="name"
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    value={this.state.age}
                    placeholder="age"
                    name="age"
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    value={this.state.email}
                    placeholder="email"
                    name="email"
                    onChange={this.changeHandler}
                />
                <button onClick={this.addFriendHandler}>Add Friend</button>
            </form>
        )
    }
}

export default FriendsListForm;