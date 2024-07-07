import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function UserProfile() {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.getUser(username).then(data => setUser(data));
    }, [username]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="user-profile">
            <h2>{user.username}</h2>
            <p>Subscribed SubRAHdits:</p>
            <ul>
                {user.subscribedSubRAHdits.map(subRAHdit => (
                    <li key={subRAHdit._id}>{subRAHdit.name}</li>
                ))}
            </ul>
            <p>Total Upvotes Received: {user.upvotesReceived}</p>
        </div>
    );
}

export default UserProfile;
