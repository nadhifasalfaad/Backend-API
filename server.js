const express = require("express");
const bodyParser = require("body-parser");
const profileRoutes = require("./routes/profileRoutes");

// Inisialisasi aplikasi Express
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Gunakan routing profil
app.use("/api", profileRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
