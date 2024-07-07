const express = require('express');
const Post = require('../models/Post');
const SubRAHdit = require('../models/SubRAHdit');
const User = require('../models/User');
const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
    const { title, content, author, subRAHdit } = req.body;
    try {
        const user = await User.findById(author);
        const sub = await SubRAHdit.findById(subRAHdit);

        if (!user || !sub) {
            return res.status(404).json({ msg: 'User or SubRAHdit not found' });
        }

        const post = new Post({ title, content, author: user, subRAHdit: sub });
        await post.save();

        sub.posts.push(post);
        await sub.save();

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get Post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('comments');
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Upvote Post
router.post('/:id/upvote', async (req, res) => {
    const { username } = req.body;
    try {
        const post = await Post.findById(req.params.id);
        const user = await User.findOne({ username });

        if (!post || !user) {
            return res.status(404).json({ msg: 'Post or User not found' });
        }

        post.upvotes += 1;
        await post.save();

        user.upvotesReceived += 1;
        await user.save();

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
