const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const Organization = require('./models/organizations');

// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/status', (req, res) => {
  res.json({status: 'connected!'});
});

app.get('/add-reccord', async (req, res) => {
  try {
    const org = await Organization.addReccord();
    console.log(org);
    res.json({added: true});
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
})

app.get('/get-roccords', Organization.getReccords);

app.listen(5000, (err) => {
  console.log('Listening');
});
