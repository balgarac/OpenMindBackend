const connection = require('../../DB/connection');

// 상담원의 오픈 횟수 랭킹
exports.ranking = (req, res) => {
    var talker = [];
    const SELECT_BY_DESC = 'SELECT * FROM talker ORDER BY openCount DESC';
    connection.query(SELECT_BY_DESC, (error, rows) => {
        if(error) console.log(error);
        for(var i in rows){
            talker.push(rows[i])
        }
        return res.status(200).json(talker);
    })
};