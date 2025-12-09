const fs = require("fs");
const {
  insertDocument,
  getAllDocuments,
  getDocumentById,
  deleteDocument,
} = require("../model/document.model");

exports.uploadPDF = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const data = {
    filename: req.file.filename,
    filepath: req.file.path,
    filesize: req.file.size,
  };

  insertDocument(data, (err, id) => {
    if (err) return res.status(500).json({ error: "DB error" });

    res.json({ message: "Uploaded", id });
  });
};

exports.getDocuments = (req, res) => {
  getAllDocuments((err, rows) => {
    if (err) return res.status(500).json({ error: "DB fetch error" });
    res.json(rows);
  });
};

exports.downloadDocument = (req, res) => {
  const id = req.params.id;

  getDocumentById(id, (err, doc) => {
    if (err || !doc) return res.status(404).json({ error: "Not found" });

    res.download(doc.filepath, doc.filename);
  });
};

exports.removeDocument = (req, res) => {
  const id = req.params.id;

  getDocumentById(id, (err, doc) => {
    if (!doc) return res.status(404).json({ error: "Not found" });

    fs.unlink(doc.filepath, (fsErr) => {
      if (fsErr && fsErr.code !== "ENOENT") {
        return res.status(500).json({ error: "File delete error" });
      }

      deleteDocument(id, (dbErr) => {
        if (dbErr) return res.status(500).json({ error: "DB delete error" });
        res.json({ message: "Deleted" });
      });
    });
  });
};
