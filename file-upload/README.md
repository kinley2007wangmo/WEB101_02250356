#  File Upload Implementation (Next.js)

##  Project Description

This project is a file upload application built using Next.js. It allows users to upload files from the browser to the server with features like validation, progress tracking, and drag-and-drop functionality.


##  Features

*  File upload using multipart/form-data
*  File type and size validation
*  Upload progress tracking
*  Drag and drop file upload
*  Files stored in server (`uploads` folder)

##  Technologies Used

* Next.js (React Framework)
* React Hook Form
* Axios
* Formidable
* React Dropzone

##  Installation & Setup

### 1. Clone the repository (if using Git)

```
git clone https://github.com/kinley2007wangmo/WEB101_02250356.git
cd file-upload
```

### 2. Install dependencies

```
npm install
```

### 3. Run the project

```
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

##  How It Works

1. User selects or drags a file.
2. File is validated (type & size).
3. File is sent to backend using Axios.
4. Backend processes file using Formidable.
5. File is stored in the `uploads` folder.
6. Upload progress is displayed to the user.

##  Notes

* Ensure `uploads` folder exists (or it will be created automatically).
* Maximum file size is 5MB.
* Supports PDF and image files.

##  Future Improvements

* Multiple file upload
* File preview before upload
* Cloud storage integration (e.g., AWS S3)
