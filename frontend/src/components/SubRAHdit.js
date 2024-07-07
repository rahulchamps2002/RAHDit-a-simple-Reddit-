import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import api from '../services/api';

function SubRAHdit() {
    const { subRAHditName } = useParams();
    const [subRAHdit, setSubRAHdit] = useState(null);

    useEffect(() => {
        api.getSubRAHdit(subRAHditName).then(data => setSubRAHdit(data));
    }, [subRAHditName]);

    if (!subRAHdit) return <div>Loading...</div>;

    return (
        <div className="subRAHdit">
            <h2>{subRAHdit.name}</h2>
            <p>{subRAHdit.description}</p>
            {subRAHdit.posts.map(post => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}

export default SubRAHdit;
