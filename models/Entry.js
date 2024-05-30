// models/Entry.js
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    end_year: Number,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: Number,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
