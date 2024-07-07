import React from 'react';

function Post({ post }) {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>By {post.author.username} in {post.subRAHdit.name}</p>
            <p>Upvotes: {post.upvotes}</p>
            <div className="comments">
                {post.comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment.content}</p>
                        <p>By {comment.author.username}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;

