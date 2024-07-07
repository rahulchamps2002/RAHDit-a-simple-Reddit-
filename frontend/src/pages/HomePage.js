import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Post from '../components/Post';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.getPosts().then(data => setPosts(data));
    }, []);

    return (
        <div className="home-page">
            <h1>Recent Posts</h1>
            {posts.map(post => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}

export default HomePage;
