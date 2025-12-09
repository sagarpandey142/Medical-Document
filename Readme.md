 PDF Document Management System

A simple full-stack web application to upload, store, view, download, and delete PDF documents.
Built using React (Vite) for the frontend and Node.js + Express + SQLite for the backend.

 **Project Overview**

This project allows users to manage PDF documents easily through a web interface.

 **Features**

  1) Upload PDF files

  2) Store file metadata in SQLite database

  3) List all uploaded documents

  4) Download any document

  5) Delete documents from server and database

**Tech Stack**

Frontend: React + Vite + Axios

Backend: Node.js + Express

Database: SQLite

File Upload: Multer

Storage: Local file system (uploads folder)

**How to Run the Project Locally**
1️)  Prerequisites

Make sure you have installed:

Node.js (LTS) → https://nodejs.org

Git (optional)

VS Code (or any editor)

Check installations:

node -v
npm -v

2️)  Clone the Repository
git clone <your-repository-url>
cd <project-folder>

3️⃣ Run the Backend
cd backend
npm install
npm run dev


Backend will start at:

http://localhost:4000


You should see:

 SQLite connected
 Server started on http://localhost:4000

4️⃣ Run the Frontend

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173

 **Example API Calls**

You can test APIs using curl or Postman.

 Upload PDF

Endpoint:

POST /documents/upload


Postman:

Method: POST

URL: http://localhost:4000/documents/upload

Body → form-data

Key: file

Type: File

Select your PDF file

✅ Get All Documents

Endpoint:

GET /documents


curl:

curl http://localhost:4000/documents

✅ Download a Document

Endpoint:

GET /documents/:id


curl:

curl -o file.pdf http://localhost:4000/documents/1

✅ Delete a Document

Endpoint:

DELETE /documents/:id


curl:

curl -X DELETE http://localhost:4000/documents/1

 **Project Structure**
backend/
  src/
    controllers/
    models/
    routes/
    middleware/
    config/
  uploads/
  db.sqlite
  server.js

frontend/
  src/
    api/
    components/
    pages/