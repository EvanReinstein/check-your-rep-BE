const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 4000;

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

app.listen(port, () => console.log(`Server started on port: ${port}`));
