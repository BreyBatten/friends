import React from 'react';

function FriendsList(props) {
    return (
        <div className="friends-list-wrapper">
            <ul>
                <h3>{props.name}</h3>
                <h4>{props.age}</h4>
                <h4>{props.email}</h4>
            </ul>
        </div>
    )
}

export default FriendsList;