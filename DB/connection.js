const mysql = require('mysql');

var connection = mysql.createConnection({
    host : "13.124.148.2",
    port : 3306,
    user : "root",
    password : "1111",
    database : "openMind"
});

connection.connect();

connection.query(`insert into tags (tag) values ('11111')`);