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
  const id = req.body.id;
  const pw = req.body.pw;
  console.log(id, pw);

  const SELECT_TALKER = `SELECT * FROM talker WHERE id = ${id}`;
  connection.query(SELECT_TALKER, (error, rows) => {
    if(error){
        console.log(error); //에러가 있다면 에러를 console에 출력.
    }
    for(var i in rows){
        if(rows[i].password == pw){
            res.status(200).json({token: rows[i].token});
        }
        else res.status(401).send('signin fail!');
    }
  })
};

exports.talkerSignup = (req, res) => {
    console.log(1);
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
        console.log(2);
        for(var i in rows){
            if(rows[i].id == id){
                return res.status(400).send('Signup fail!');
            }
            else{
                connection.query(INSERT_TALKER, () => {
                    return res.status(200).send('Signup success!');
                });
            }
        }
    })
};

const smsVerification = (req, res) => {
    const phoneNumber = req.body.phoneNumber;
  
    request({
      method: 'POST',
      json: true,
      uri: `https://api-sens.ncloud.com/v1/sms/services/${process.env.SENS_SERVICEID}/messages`,
      headers: {
        'Content-Type': 'application/json',
        'X-NCP-auth-key': process.env.SENS_ACCESSKEYID,
        'X-NCP-service-secret': process.env.SENS_SERVICESECRET
      },
      body: {
        type: 'sms',
        from: process.env.SENS_SENDNUMBER,
        to: [`${phoneNumber}`],
        content: `WeGoing 인증번호 ${verificationNumber}입니다.`
      }
    });
  
    return res.json({ phoneNumber: phoneNumber });
  }