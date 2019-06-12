import React from 'react';
import Axios from 'axios';

function FriendsList(props) {
    const handleDelete = () => {
        Axios.delete(`http://localhost:5000/friends/${props.id}`)
            .then(res => {
                console.log(res);
                props.refresh();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="friends-list-wrapper">
            <ul>
                <h3>{props.name}</h3>
                <h4>{props.age}</h4>
                <h4>{props.email}</h4>
                <button className="deleteButton" onClick={handleDelete}>X</button>
            </ul>
        </div>
    )
}

export default FriendsList;