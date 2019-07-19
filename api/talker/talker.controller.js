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
  const cate = req.params.cate;
  

};

exports.talkerBytoken = (req, res) => {
  const token = req.params.token;
  const SELECT_TALKER_BYTOKEN = `SELECT * FROM talker WHERE token = ${token}`;

  connection.query(SELECT_TALKER_BY_TOKEN, (error, rows) => {
    if(error) console.log(error);
    
  })
};