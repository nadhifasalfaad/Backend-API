const db = require("../config/db");

// Fungsi untuk meng-upload profil
const uploadProfile = (req, res) => {
  const { name, age, gender, profile_picture } = req.body;

  // Validasi input
  if (!name || !age || !gender || !profile_picture) {
    return res.status(400).send("All fields are required");
  }

  // Validasi apakah 'age' adalah angka
  if (isNaN(age)) {
    return res.status(400).send("Age must be a number");
  }

  // Validasi format gambar Base64
  const base64Pattern = /^data:image\/(jpeg|png|gif);base64,/;
  if (!base64Pattern.test(profile_picture)) {
    return res.status(400).send("Invalid image format. Ensure the image is Base64 encoded.");
  }

  const query = "INSERT INTO profiles (name, age, gender, profile_picture) VALUES (?, ?, ?, ?)";

  // Menyimpan data profil dengan gambar Base64 ke database
  db.query(query, [name, age, gender, profile_picture], (err, result) => {
    if (err) {
      console.error("Database error:", err);  // Log error untuk debugging
      return res.status(500).send("Error saving data to database");
    }

    res.status(201).json({
      message: "Profile uploaded successfully",
      profileId: result.insertId,  // Mengembalikan ID profil yang baru saja dimasukkan
    });
  });
};

// Fungsi untuk mengambil data profil berdasarkan ID
const getProfile = (req, res) => {
  const profileId = req.params.id;  // Mengambil ID dari parameter URL

  const query = "SELECT * FROM profiles WHERE id = ?";

  db.query(query, [profileId], (err, result) => {
    if (err) {
      console.error("Database error:", err);  // Log error untuk debugging
      return res.status(500).send("Error fetching profile data");
    }

    if (result.length === 0) {
      return res.status(404).send("Profile not found");
    }

    res.status(200).json(result[0]);  // Mengembalikan data profil yang ditemukan
  });
};

// Mengekspor kedua fungsi agar bisa digunakan di routes
module.exports = { uploadProfile, getProfile };
