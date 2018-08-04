const express = require('express');
const axios = require('axios');
const app = express();

// Routes
app.get('/', async function (req, res) {
  const cityName = req.query.city;
  const apiResponse = await axios.get("https://www.metaweather.com/api/location/search/", {
    params: {
      query: cityName
    }
  });
  res.send(`Hello ${cityName}!`);
});

app.get('/hello', (req, res) => {
  const myName = req.query.name;  //add /hello?name=Amelia for "Hello Amelia!"
  res.send(`Hello ${myName}`);
});

// Listen
var port = 80;
app.listen(port);
console.log('Listening on localhost:' + port);