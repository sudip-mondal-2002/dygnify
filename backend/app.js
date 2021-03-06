require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/forms', formRoutes);
app.use('/auth', authRoutes);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = app;