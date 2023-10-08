// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "dist" directory
app.use(express.static('dist'));

// HTTPS cert and key
const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(8000, () => {
  console.log('HTTPS server running on port 8000');
});
