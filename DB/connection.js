const mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "asdf1145",
    database : "openmind_DB"
});

connection.connect();

module.exports = connection;