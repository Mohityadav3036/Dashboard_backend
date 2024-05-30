// routes/entries.js
const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry.js');
const fs = require('fs');

router.post('/import', async (req, res) => {
    try {
        // Read JSON file
        const jsonData = fs.readFileSync('data.json', 'utf8');
        const data = JSON.parse(jsonData);

        // Insert data into MongoDB
        await Entry.insertMany(data);
        res.status(200).json({ message: 'Data imported successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
