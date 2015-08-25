var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/*', function (req, res) {
  var path = req.originalUrl;

  request('https://api.forecast.io/forecast/c4ec0d8427e0f79cd082031268378ba5/37.8267,-122.423' + path).pipe(res);
});

app.listen(process.env.PORT || 3000);
