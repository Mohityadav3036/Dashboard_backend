// routes/entries.js
const express = require('express');
const entriesRouter = express.Router();
const Entry = require('../models/Entry.js'); // Import your Mongoose model

entriesRouter.get('/get', async (req, res) => {
    try {
        // Fetch data from MongoDB
        const entries = await Entry.find();
        res.json(entries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = entriesRouter;
