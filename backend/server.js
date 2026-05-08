const express = require("express"); 
const mysql = require("mysql2"); 
const cors = require("cors");

const siswaRoutes = require("./routes/siswaRoute");
const guruRoutes = require("./routes/guruRoutes");

const app = express(); 
app.use(cors());
app.use(express.json())

app.use("/api/siswa", siswaRoutes)
app.use("/api/guru", guruRoutes)


app.listen(3000, () => {
    console.log("Server running on port 3000");
});