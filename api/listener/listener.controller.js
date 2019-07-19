const connection = require('../../DB/connection');

exports.listener = (req, res) => {
  var listeners = [];
  const SELECT_LISTENER = 'SELECT * FROM listener';
  connection.query(SELECT_LISTENER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows) 
      listeners.push(JSON.parse(rows[i].name));
  });
  return res.status(200).json(listeners);
};