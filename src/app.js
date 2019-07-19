var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('../api/listener/index'));
app.use('/', require('../api/tags/index'));
app.use('/', require('../api/talker/index'));
app.use('/', require('../api/auth/index'));

app.get('/', (req, res) => {
  res.send('World!');
});

app.listen(9000, () => {
  console.log('Example app listening on port 9000!');
});