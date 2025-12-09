***Design Document***

○ ***Architecture***

  This project follows a simple client–server architecture.

Flow of the system:

Frontend (React) → Backend (Express API) → SQLite Database
Backend also manages file storage in the local uploads folder.

***Process:***

The frontend sends HTTP requests to the backend.

The backend processes file uploads using Multer.

File metadata is stored in the SQLite database.

PDF files are stored in the local file system.

○ ***Stack choices***

**Frontend**:

React with Vite for fast development and component-based UI.

Axios for API communication.

**Backend**:

Node.js with Express.js for creating REST APIs.

**Database**:

SQLite for lightweight, file-based data storage.

**File handling**:

Multer middleware for handling file uploads.

○ ***Answered questions***

**Frontend framework and why:**

React was chosen for its component-based structure and wide ecosystem.

**Backend framework and why:**

Express.js was chosen for its simplicity and flexibility in building APIs.

**Database choice and why:**

SQLite was chosen because it is lightweight and easy to configure for local development.

**Scaling for 1000 users:**

If the system needs to support 1000 users:

Replace SQLite with PostgreSQL or MySQL.

Store files in cloud storage such as AWS S3.

Introduce Redis for caching.

Add a load balancer.

Implement authentication and authorization.

Add rate limiting and logging.

○ ***API spec***

Base URL:
http://localhost:4000

***Upload a document***
Method: POST
URL: http://localhost:4000/documents/upload

Description: Uploads a PDF file.

Postman setup:

Method: POST
Body → form-data

Key: file
Type: File
Select: choose a PDF file from your system

Sample Response:

{
  "message": "File uploaded successfully",
  "id": 1
}


***List all documents***
Method: GET
URL: http://localhost:4000/documents

Description: Returns a list of all documents.

Postman setup:

Method: GET
URL: http://localhost:4000/documents

Sample Response:

[
  {
    "id": 1,
    "filename": "sample.pdf",
    "filesize": 24576,
    "created_at": "2025-12-09T10:00:00Z"
  }
]


***Download a document***
Method: GET
URL: http://localhost:4000/documents/:id

Description: Downloads a file by ID.

Postman setup:

Method: GET
URL: http://localhost:4000/documents/1

How to download in Postman:
Click the Send and Download button.

Response:

Binary PDF file stream

***Delete a document***
Method: DELETE
URL: http://localhost:4000/documents/:id

Description: Deletes a file.

Postman setup:

Method: DELETE
URL: http://localhost:4000/documents/1

Sample Response:

{
  "message": "File deleted successfully"
}

○ ***Assumptions***

Only PDF files are supported.

Maximum file size is limited to 10 MB.

No authentication or user management is implemented.

Files are stored locally in the uploads directory.

The system is designed for a single-user environment.

The application runs in a local development setup