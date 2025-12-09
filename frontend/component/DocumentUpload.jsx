import { useState } from "react";
import { uploadDocument } from "../component/api/document.api";

const DocumentUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!file) return setMessage("Please select a PDF");

    if (file.type !== "application/pdf") {
      return setMessage("Only PDF files allowed");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await uploadDocument(formData);
      setMessage(" Uploaded successfully");
      setFile("");
      document.getElementById("fileInput").value = "";
      onUploadSuccess();
    } catch (err) {
      setMessage(err?.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload PDF</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="fileInput"
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DocumentUpload;
