const connection = require('../../DB/connection');

exports.talker = (req, res) => {
  var talker = [];
  const SELECT_TALKER = 'SELECT * FROM talker';
  connection.query(SELECT_TALKER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows) {
      talker.push(rows[i]);
    }
    return res.status(200).json(talker);
  });
};

exports.talkerBytag = (req, res) => {
  var talker = [];
  const tag = req.params.tag
  const SELECT_TALKER = `SELECT * FROM talker WHERE field=${tag}`;

  connection.query(SELECT_TALKER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows)
      talker.push(rows[i]);
    return res.status(200).json(talker);
  });
};

exports.talkerBycategory = (req, res) => {
  
};

exports.talkerBytoken = (req, res) => {
  
};