import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export const uploadDocument = (formData) =>
  axios.post(`${API_BASE}/documents/upload`, formData);

export const fetchDocuments = () =>
  axios.get(`${API_BASE}/documents`);

export const deleteDocument = (id) =>
  axios.delete(`${API_BASE}/documents/${id}`);

export const downloadDocument = (id) =>
  axios.get(`${API_BASE}/documents/${id}`, { responseType: "blob" });
