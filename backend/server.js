// ------------------------------
// 🌐 DIGITAL MARKETING BACKEND
// ------------------------------

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");
require("dotenv").config();

const app = express();

// ------------------------------
// 🧩 Middleware
// ------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------
// 🗂️ Database Setup
// ------------------------------

// ✅ Ensure 'data' directory exists (important for Render)
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// ✅ Create or open the SQLite database file
const dbPath = path.join(dataDir, "database.sqlite");
let db;

(async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Create the contacts table if it doesn't exist
  await db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT,
      company TEXT,
      service TEXT,
      message TEXT,
      date TEXT
    )
  `);

  console.log("✅ SQLite Database connected successfully!");
})().catch((err) => {
  console.error("❌ Database initialization failed:", err);
});

// ------------------------------
// 📬 API ROUTES
// ------------------------------

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Digital Marketing API is running successfully 🚀");
});

// ✅ POST /api/contact — Save a contact submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;
    const date = new Date().toLocaleString();

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    await db.run(
      `INSERT INTO contacts (name, email, phone, company, service, message, date)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company, service, message, date]
    );

    res.json({ success: true, message: "Contact saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// ✅ GET /api/contacts — Retrieve all contacts (for Admin)
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await db.all("SELECT * FROM contacts ORDER BY id DESC");
    res.json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// ✅ DELETE /api/contact/:id — Delete a contact by ID
app.delete("/api/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.run("DELETE FROM contacts WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Error deleting contact:", error);
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

// ------------------------------
// 🔐 Admin Password Route (optional)
// ------------------------------
app.get("/api/admin-password", (req, res) => {
  res.json({ password: process.env.ADMIN_PASSWORD });
});

// ------------------------------
// 🚀 Start Server
// ------------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
