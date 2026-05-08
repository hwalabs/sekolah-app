const db = require("../db")

exports.siswa = (req, res) => {
    db.query('SELECT * FROM  siswa', (err, result) => {
        if(err){
            return res.json({error: err})
        }

        res.json(result)
    })
}
