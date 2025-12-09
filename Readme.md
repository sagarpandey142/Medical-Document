PDF Document Management System

A simple full-stack web application to upload, store, view, download, and delete PDF documents.
Built using React (Vite) for the frontend and Node.js + Express + SQLite for the backend.

***Project Overview***

This project allows users to manage PDF documents easily through a web interface.

***Features***

Upload PDF files.

Store file metadata in SQLite database.

List all uploaded documents.

Download any document.

Delete documents from server and database.

***Tech Stack***

Frontend: React + Vite + Axios
Backend: Node.js + Express
Database: SQLite
File Upload: Multer
Storage: Local file system (uploads folder)

***How to Run the Project Locally***

1. Prerequisites

Make sure you have installed:

Node.js (LTS) → https://nodejs.org

Git (optional)

VS Code (or any editor)

Check installations:

node -v
npm -v


2. Clone the Repository

git clone https://github.com/sagarpandey142/Medical-Document
cd Medical-Document


3. Run the Backend

cd backend
npm install
npm run dev


Backend will start at:

http://localhost:4000


You should see:

SQLite connected
Server started on http://localhost:4000


4. Run the Frontend

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173


Example API Calls

You can test APIs using curl or Postman.

1. Upload PDF

Endpoint:

POST /documents/upload


Postman:

Method: POST

URL: http://localhost:4000/documents/upload

Body → form-data

Key: file

Type: File

Select your PDF file

2. Get All Documents

Endpoint:

GET /documents


curl:

curl http://localhost:4000/documents


3. Download a Document

Endpoint:

GET /documents/:id


curl:

curl -o file.pdf http://localhost:4000/documents/1


4. Delete a Document

Endpoint:

DELETE /documents/:id


curl:

curl -X DELETE http://localhost:4000/documents/1

