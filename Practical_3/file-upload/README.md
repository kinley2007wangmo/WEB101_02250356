#  File Upload App (Next.js + React)

##  Project Description
This project is a simple file upload system built using Next.js. It allows users to upload files using both:
- File selection (click to choose file)
- Drag and drop functionality

The upload progress is displayed in real-time using a progress bar.

##  Features
- File upload using React Hook Form
- Drag and drop support (react-dropzone)
- File size validation (max 5MB)
- Upload progress tracking using Axios
- Simple and clean UI
- Backend API upload handling

##  Technologies Used
- Next.js (React Framework)
- React Hook Form
- Axios
- React Dropzone
- FormData API

##  Installation

```bash
npm install
npm install react-dropzone axios react-hook-form
```

## Run Project

Run `npm run dev` and Open `http://localhost:3000`

## How It Works
User selects or drags a file
File is stored in form state
On submit, file is sent to /api/upload
Upload progress is shown in percentage
Backend stores or processes the file

##  Limitations
Only supports single file upload
Maximum file size is 5MB
No database storage included (basic file handling only)