import express from 'express';
import fs from 'fs';
import https from 'https';
import path from 'path';
const app = express();
const port = 8000;
// To enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Serve your compiled TypeScript files from 'dist' directory
app.use('/', express.static(path.join(__dirname, 'dist')));
// Add HTTPS support
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
};
https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Server running at https://localhost:${port}/`);
});
