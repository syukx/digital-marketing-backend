// backend/server.js
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
let db;
(async () => {
  db = await open({
    filename: "./data/database.sqlite",
    driver: sqlite3.Database,
  });

  await db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      service TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("✅ Connected to SQLite database & contacts table ready");
})();

// POST endpoint to save contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, Email, and Message are required." });
    }

    await db.run(
      `INSERT INTO contacts (name, email, phone, company, service, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company, service, message]
    );

    console.log(`📩 New contact saved: ${name} <${email}>`);
    res.status(201).json({ success: true, message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err.message);
    res.status(500).json({ error: "Failed to save contact." });
  }
});

// DELETE contact by ID (optional)
app.delete("/api/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.run("DELETE FROM contacts WHERE id = ?", id);
    res.json({ success: true, message: "Contact deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting contact:", err.message);
    res.status(500).json({ error: "Failed to delete contact." });
  }
});


// (Optional) Fetch all saved contacts
app.get("/api/contact", async (req, res) => {
  try {
    const rows = await db.all("SELECT * FROM contacts ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching contacts:", err.message);
    res.status(500).json({ error: "Failed to fetch contacts." });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
