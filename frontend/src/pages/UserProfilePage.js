import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

function UserProfilePage() {
    const { username } = useParams();
    return <UserProfile username={username} />;
}

export default UserProfilePage;
