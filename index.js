require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const ReviewServer = express();
const router = require('./Routes/router');
const db = require('./DB/connection');

// Middleware
ReviewServer.use(cors());
ReviewServer.use(express.json());
ReviewServer.use(router);

// ✅ Serve images from the Uploads folder
ReviewServer.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

const PORT = process.env.PORT || 3000;

ReviewServer.listen(PORT, () => {
  console.log("Project running in", PORT);
});
