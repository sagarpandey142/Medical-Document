const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.middleware");

const {
  uploadPDF,
  getDocuments,
  downloadDocument,
  removeDocument,
} = require("../controllers/document.controller");

router.post("/upload", upload.single("file"), uploadPDF);
router.get("/", getDocuments);
router.get("/:id", downloadDocument);
router.delete("/:id", removeDocument);

module.exports = router;
