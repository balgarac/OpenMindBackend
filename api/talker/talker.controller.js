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
  /* var talker = [];
  const SELECT_TALKER = 'SELECT * FROM talker';
  connection.query(SELECT_TALKER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows) 
      talker.push(JSON.parse(rows[i]));
  });

  talker.filter(talker => talker.) */
};

exports.talkerBycategory = (req, res) => {

};

exports.talkerBytoken = (req, res) => {

};