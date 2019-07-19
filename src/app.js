var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('../api/listener/index'));
app.use('/', require('../api/tags/index'));
app.use('/', require('../api/talker/index'));
app.use('/', require('../api/auth/index'));
app.use('/', require('../api/rank/index'));

app.get('/', (req, res) => {
  res.send('World!');
});

app.listen(9000, () => {
  console.log('Example app listening on port 9000!');
});