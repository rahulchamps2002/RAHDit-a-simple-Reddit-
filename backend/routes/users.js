const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SubRAHdit = require('../models/SubRAHdit');
const router = express.Router();

// Register
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ username, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user: { id: user.id } };

        jwt.sign(payload, 'your_jwt_secret', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get User Profile
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).populate('subscribedSubRAHdits');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Subscribe to SubRAHdit
router.post('/:username/subscribe', async (req, res) => {
    const { subRAHditName } = req.body;
    try {
        const user = await User.findOne({ username: req.params.username });
        const subdit = await SubRAHdit.findOne({ name: subRAHditName });

        if (!user || !subRAHdit) {
            return res.status(404).json({ msg: 'User or SubRAHdit not found' });
        }

        user.subscribedSubRAHdits.push(subRAHdit);
        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
