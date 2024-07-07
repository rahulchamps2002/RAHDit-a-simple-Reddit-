const express = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const router = express.Router();

// Create Comment
router.post('/:postId/comments', async (req, res) => {
    const { content, author } = req.body;
    try {
        const user = await User.findById(author);
        const post = await Post.findById(req.params.postId);

        if (!user || !post) {
            return res.status(404).json({ msg: 'User or Post not found' });
        }

        const comment = new Comment({ content, author: user, post: post });
        await comment.save();

        post.comments.push(comment);
        await post.save();

        res.json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get Comments for a Post
router.get('/:postId/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('comments');
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json(post.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
