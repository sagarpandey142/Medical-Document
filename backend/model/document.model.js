const db = require("../config/db");

exports.createTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS documents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL,
      filepath TEXT NOT NULL,
      filesize INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

exports.insertDocument = (data, callback) => {
  const { filename, filepath, filesize } = data;

  db.run(
    `INSERT INTO documents (filename, filepath, filesize) VALUES (?, ?, ?)`,
    [filename, filepath, filesize],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

exports.getAllDocuments = (callback) => {
  db.all(`SELECT * FROM documents ORDER BY created_at DESC`, [], callback);
};

exports.getDocumentById = (id, callback) => {
  db.get(`SELECT * FROM documents WHERE id = ?`, [id], callback);
};

exports.deleteDocument = (id, callback) => {
  db.run(`DELETE FROM documents WHERE id = ?`, [id], callback);
};
