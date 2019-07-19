const connection = require('../../DB/connection');

// 모든 상담원 리스트
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

// 토큰에 맞는 상담원 정보
exports.talkerBytoken = (req, res) => {
  const token = req.params.token;
  const SELECT_TALKER_BY_TOKEN = `SELECT * FROM talker WHERE token = '${token}'`;

  connection.query(SELECT_TALKER_BY_TOKEN, (error, row) => {
    if(error) console.log(error);
    return res.status(200).json(row);
  })
};

// 상담원의 open 횟수 증가
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