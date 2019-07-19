const connection = require('../../DB/connection');

exports.listenerSignin = (req, res) => {
  const id = req.params.id;
  const pw = req.params.pw;

  var listeners = [];
  const SELECT_LISTENER = 'SELECT * FROM listener';
  connection.query(SELECT_LISTENER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows) 
      listeners.push(rows[i]);
  });

  const listenUser = listeners.filter(listener => {
    (listener.id === id) && (listener.pw === pw)
  })[0];
  const UserToken = {
    token: listenUser.token
  };

  if (!listenUser) {
    return res.status(401).send("Login failed");
  }
  return res.status(200).json(UserToken).send("Signup success!");
};

exports.listenerSignup = (req, res) => {

};

exports.talkerSignin = (req, res) => {
  const id = req.params.id;
  const pw = req.params.pw;

  var talker = [];
  const SELECT_TALKER = 'SELECT * FROM talker';
  connection.query(SELECT_TALKER, (error, rows) => {
    if (error) console.log(error);
    for (var i in rows) 
      talker.push(rows[i]);
  });

  const talkerUser = talker.filter(talker => {
    (talker.id === id) && (talker.pw === pw)
  })[0];
  const UserToken = {
    token: talkerUser.token
  };

  if (!talkerUser) {
    return res.status(401).send("Login failed");
  }
  return res.status(200).json(UserToken).send("Signup success!");
};

exports.talkerSignup = (req, res) => {

};