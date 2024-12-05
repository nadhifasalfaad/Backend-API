const mysql = require("mysql2");  // Pastikan ini ada di baris pertama

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_profiles",
});

// Connect ke database MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
