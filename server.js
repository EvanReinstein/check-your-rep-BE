const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// .env Variables
const key = process.env.API_KEY;
console.log(key);

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require API - TODO once controller is set up

// ///////
// Routes
// ///////

// Test Route
app.get('/', (req, res) => {
  res.send('Hello there...');
});

app.get('/api/rep-info', (req, res) => {
  res.send('Hello Dave...!');
});

app.post('/api/rep-info', (req, res) => {
  const { zipcode } = req.body;
  const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${zipcode}&key=${key}`;

  request(url, (err, res, body) => {
    if (err) { console.log(`Error in server request is: ${err}`); }
  }).pipe(res);
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
