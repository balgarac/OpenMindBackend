const connection = require('../../DB/connection');
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

exports.listenerSignin = (req, res) => {
    
};

exports.listenerSignup = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const id = req.body.id;
    const pw = req.body.pw;
    const age = req.body.age;
    const sex = req.body.sex;
    const location = req.body.location;
    const token = makeid();
    const CHECK_DUP = `SELECT * FROM listener`;
    const INSERT_LISTENER = `INSERT INTO listener (name, phoneNumber, id, pw, age, sex, loaction, token) VALUES ('${name}', '${phone}', '${id}', '${pw}', '${age}', '${sex}', '${location}', '${token}')`

    connection.query(CHECK_DUP, (rows) => {
        for(var i in rows){
            if(rows[i].id == id){
                return res.status(400).send('Signup fail!');
            }
            else{
                connection.query(INSERT_LISTENER, () => {
                    return res.status(200).send('Signup success!');
                })
            }
        }
    })
};

exports.talkerSignin = (req, res) => {
    
};

exports.talkerSignup = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const id = req.body.id;
    const pw = req.body.pw;
    const age = req.body.age;
    const sex = req.body.sex;
    const field = req.body.field;
    const area = req.body.area;
    const token = makeid();
    const CHECK_DUP = `SELECT * FROM listener`;
    const INSERT_TALKER = `INSERT INTO listener (name, phoneNumber, id, pw, age, sex, field, area, token) VALUES ('${name}', '${phone}', '${id}', '${pw}', '${age}', '${sex}', '${field}', '${area}', '${token}')`
    
    connection.query(CHECK_DUP, (rows) => {
        for(var i in rows){
            if(rows[i].id == id){
                return res.status(400).send('Signup fail!');
            }
            else{
                connection.query(INSERT_TALKER, () => {
                    return res.status(200).send('Signup success!');
                })
            }
        }
    })
};