const connection = require('../../DB/connection');

exports.listener = (req, res) => {
  var listeners = [];
  const SELECT_LISTENER = 'SELECT * FROM listener';
  connection.query(SELECT_LISTENER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows) 
      listeners.push(rows[i]);
    return res.status(200).json(listeners);
  });
};

exports.listenerBytoken = (req, res) => {
  var listener = [];
  const token = req.params.token;
  const SELECT_LISTENER_BY_TOKEN = `SELECT * FROM listener WHERE token = '${token}'`;

  connection.query(SELECT_LISTENER_BY_TOKEN, (error, rows) => {
    if(error) console.log(error);
    return res.status(200).json(rows);
  })
};