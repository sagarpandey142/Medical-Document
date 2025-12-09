const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const DB_PATH = path.join(__dirname, "../../db.sqlite");

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) console.error("DB Error:", err);
  else console.log(" SQLite connected");
});

module.exports = db;
