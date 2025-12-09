import { useEffect, useState } from "react";
import { fetchDocuments } from "../api/document.api";
import DocumentUpload from "../DocumentUpload";
import DocumentList from "../DocumentList";


const DocumentPage = () => {
  const [documents, setDocuments] = useState([]);

  const loadDocuments = async () => {
    const res = await fetchDocuments();
    setDocuments(res.data);
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <div className="container">
      <h1>Patient Documents</h1>

      <DocumentUpload onUploadSuccess={loadDocuments} />

      <DocumentList documents={documents} onRefresh={loadDocuments} />
    </div>
  );
};

export default DocumentPage;
