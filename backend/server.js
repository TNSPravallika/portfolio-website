const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// --- THE FIX FROM THE VIDEO ---
const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);
// ------------------------------

const app = express();
app.use(cors());
app.use(express.json());

// This connects your website to your database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Awesome! MongoDB is successfully connected!'))
  .catch(err => console.error('Database connection error:', err));

// This turns the server on
app.listen(process.env.PORT, () => {
  console.log('Backend server is running on port ' + process.env.PORT);
});