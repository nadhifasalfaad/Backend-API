const db = require("../config/db");

// Fungsi untuk menambahkan profil baru ke database
const uploadProfile = (name, age, gender, profile_picture, callback) => {
  const query =
    "INSERT INTO profiles (name, age, gender, profile_pictures) VALUES (?, ?, ?, ?)";
  db.query(query, [name, age, gender, profile_picture], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// Fungsi untuk mengambil semua profil
const getProfiles = (callback) => {
  const query = "SELECT * FROM profiles";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = { uploadProfile, getProfiles };
