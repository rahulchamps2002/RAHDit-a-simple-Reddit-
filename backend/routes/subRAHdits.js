const express = require('express');
const SubRAHdit = require('../models/SubRAHdit');
const router = express.Router();

// Create SubRAHdit
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    try {
        let subRAHdit = await SubRAHdit.findOne({ name });
        if (subRAHdit) {
            return res.status(400).json({ msg: 'SubRAHdit already exists' });
        }

        subRAHdit = new SubRAHdit({ name, description });
        await subRAHdit.save();

        res.json(subRAHdit);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get SubRAHdit
router.get('/:name', async (req, res) => {
    try {
        const subRAHdit = await SubRAHdit.findOne({ name: req.params.name }).populate('posts');
        if (!subRAHdit) {
            return res.status(404).json({ msg: 'SubRAHdit not found' });
        }
        res.json(subRAHdit);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

