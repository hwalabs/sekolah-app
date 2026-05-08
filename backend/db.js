const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sekolah"
});

db.connect((err) => {
    if (err) {
        console.log("Koneksi ke server gagal", err)
    } else {
        console.log("Koneksi ke server berhasil!")
    }
})

module.exports = db