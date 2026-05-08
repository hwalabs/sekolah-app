const db = require("../db")

exports.guruku = (req, res) => {
    db.query('SELECT * FROM  guru', (err, result) => {
        if(err){
            return res.json({error: err})
        }

        res.json(result)
    })
}