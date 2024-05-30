// app.js
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const entryRoutes = require('./routes/entries');
const entriesRouter = require('./routes/getdata');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://ymohitayadava:mDnyWbysmtG8LNdw@cluster0.vpzo9c9.mongodb.net/blackintern', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/entries', entryRoutes);
app.use('/getdata', entriesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
