const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");  // Mengimpor profileController

// Route untuk membuat profil
router.post("/profile", profileController.uploadProfile);

// Route untuk mendapatkan profil berdasarkan ID
router.get("/profile/:id", profileController.getProfile);  // Gunakan profileController.getProfile

module.exports = router;
