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
  var talker = [];
  const token = req.params.token;
  const SELECT_TALKER_BY_TOKEN = `SELECT * FROM talker WHERE token = ${token}`;

  connection.query(SELECT_TALKER_BY_TOKEN, (error, row) => {
    if(error) console.log(error);
    talker.push(row);
    return res.status(200).json(talker);
  })
};

exports.incOpenCount = (req, res) => {
  var token = req.params.token;
  const SELECT_TALKER_OPENCOUNT = `SELECT * FROM talker WHERE token = '${token}'`

  connection.query(SELECT_TALKER_OPENCOUNT, (error, rows) => {
    if(error) console.log(error); 
    const INC_OPENCOUNT = `UPDATE talker SET openCount = ${++rows[0].openCount} WHERE token = '${token}'`
    connection.query(INC_OPENCOUNT, (error, rows) => {
      if(error) console.log(error);
    });
    return res.status(200).json(rows[0]);
  });
}