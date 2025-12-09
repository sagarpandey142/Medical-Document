import {
  deleteDocument,
  downloadDocument,
} from "../component/api/document.api";

const DocumentList = ({ documents, onRefresh }) => {
  const handleDownload = async (id, filename) => {
    try {
      const res = await downloadDocument(id);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Download failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this file?")) return;

    try {
      await deleteDocument(id);
      onRefresh();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}> Uploaded Documents</h2>

      {documents.length === 0 ? (
        <p style={emptyStyle}>No documents found</p>
      ) : (
        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead style={theadStyle}>
              <tr>
                <th style={thStyle}>File Name</th>
                <th style={thStyle}>Size</th>
                <th style={thStyle}>Uploaded</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} style={trStyle}>
                  <td style={tdFileStyle}>{doc.filename}</td>
                  <td style={tdStyle}>
                    {Math.round(doc.filesize / 1024)} KB
                  </td>
                  <td style={tdStyle}>
                    {new Date(doc.created_at).toLocaleString()}
                  </td>
                  <td style={tdStyle}>
                    <button
                      onClick={() =>
                        handleDownload(doc.id, doc.filename)
                      }
                      style={downloadBtn}
                    >
                       Download
                    </button>
                    <button
                      onClick={() => handleDelete(doc.id)}
                      style={deleteBtn}
                    >
                       Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DocumentList;

/* ---------------- Styles ---------------- */

const containerStyle = {
width:"100%",
  marginTop: "30px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const titleStyle = {
  marginBottom: "15px",
  fontSize: "20px",
  fontWeight: "600",
};

const emptyStyle = {
  color: "#777",
  fontSize: "15px",
};

const tableWrapper = {
  overflowX: "auto",
  borderRadius: "8px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const theadStyle = {
  backgroundColor: "#f5f7fa",
};

const thStyle = {
  padding: "14px",
  textAlign: "left",
  fontSize: "14px",
  color: "#555",
  fontWeight: "600",
};

const trStyle = {
  color:"white",
  borderBottom: "1px solid #eee",
  transition: "background 0.2s ease",
};

const tdStyle = {
  padding: "7px",
  fontSize: "14px",
 
};

const tdFileStyle = {
  ...tdStyle,
  fontWeight: "500",
 
};

const downloadBtn = {
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  marginRight: "8px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
};

const deleteBtn = {
  background: "#f44336",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
};
