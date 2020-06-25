const path = require('path');
const express = require('express');

const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
const check = process.env.check;

app.get('/data', function (req, res) {
    res.send('index');
  });

const port  = 3010;
app.listen(port, () => {
   console.log('Server is running at port '+port);
  });

  