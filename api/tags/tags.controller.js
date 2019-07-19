const connection = require('../../DB/connection');

exports.tagList = (req, res) => {
    var tags = [];
    const SELECT_TAGS = 'SELECT * FROM tags'
    connection.query(SELECT_TAGS, (error, rows) => {
        if(error) console.log(error);
        for(var i in rows)
            tags.push(rows[i].tag)
    });
    return res.status(200).json(tags);
};

exports.tagUpdate = (req, res) => {

}