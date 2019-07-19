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
    const id = req.body.id;
    const pw = req.body.pw;
    console.log(id, pw);
  
    const SELECT_LISTENER = `SELECT * FROM listener WHERE id = '${id}'`;
    connection.query(SELECT_LISTENER, (error, rows) => {
      if(error){
          console.log(error); //에러가 있다면 에러를 console에 출력.
      }
      console.log(rows);
      for(var i in rows){
          if(rows[i].pw == pw){
              res.status(200).json({token: rows[i].token});
          }
          else res.status(401).send('signin fail!');
      }
    });
};

exports.listenerSignup = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phoneNumber;
    const id = req.body.id;
    const pw = req.body.pw;
    const age = req.body.age;
    const sex = req.body.sex;
    const location = req.body.location;
    const token = makeid();
    const CHECK_DUP = `SELECT * FROM listener`;
    const INSERT_LISTENER = `INSERT INTO listener (name, phoneNumber, id, pw, age, sex, location, token) VALUES ('${name}', '${phone}', '${id}', '${pw}', ${age}, '${sex}', '${location}', '${token}')`

    connection.query(CHECK_DUP, (error, rows) => {
        if(error) console.log(rows);
        console.log(rows);
        for(var i in rows){
            if(rows[i].id == id){
                return res.status(400).json({messgae: 'Signup fail!'});
            }
        }
        connection.query(INSERT_LISTENER, (error, rows) => {
            return res.status(200).json({message: 'Signup success!'});
        })
    })
};

exports.talkerSignin = (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  console.log(id, pw);

  const SELECT_TALKER = `SELECT * FROM talker WHERE id = '${id}'`;
  connection.query(SELECT_TALKER, (error, rows) => {
    if(error){
        console.log(error); //에러가 있다면 에러를 console에 출력.
    }
    console.log(rows);
    for(var i in rows){
        if(rows[i].pw == pw){
            res.status(200).json({token: rows[i].token});
        }
        else res.status(401).send('signin fail!');
    }
  })
};

exports.talkerSignup = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phoneNumber;
    const id = req.body.id;
    const pw = req.body.pw;
    const age = req.body.age;
    const sex = req.body.sex;
    const field = req.body.field;
    const area = req.body.area;
    const introduce = req.body.introduce;
    const profile = req.body.profile;
    const token = makeid();
    const career = req.body.career;
    const openCount = req.body.openCount;
    console.log(name, phone, id, pw, age, sex, field, area, introduce, profile, token, career, openCount)
    const CHECK_DUP = `SELECT * FROM talker`;
    const INSERT_TALKER = `INSERT INTO talker (name, phoneNumber, id, pw, age, sex, field, area, introduce, profile, token, career, openCount) VALUES ('${name}', '${phone}', '${id}', '${pw}', ${age}, '${sex}', '${field}', '${area}', '${introduce}', '${profile}', '${token}', ${career}, ${openCount})`
    
    connection.query(CHECK_DUP, (error, rows) => {
        if(error) console.log(error);
        for(var i in rows){
            if(rows[i].id == id){
                return res.status(400).json({message: 'Signup fail!'});
            }
        }
        connection.query(INSERT_TALKER, (error, rows) => {
            return res.status(200).json({message: 'Signup success!'});
        });
    })
};