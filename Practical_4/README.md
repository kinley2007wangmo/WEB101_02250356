# TikTok Clone — Practical 4

A TikTok-inspired full stack web application developed using Next.js and Node.js.

---

## Technologies Used

### Frontend
- Next.js
- React.js
- Axios
- React Hot Toast
- React Icons
- TanStack Query

### Backend
- Node.js
- Express.js
- Prisma ORM

---

## Features

- User Login
- Logout Functionality
- TikTok-style Video Feed
- Like / Unlike Videos
- Comment System
- Share Button
- User Profile Page
- Following Page
- Video Upload Page
- Responsive Sidebar Navigation

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd TikTok_Frontend
```

Install dependencies:

```bash
npm install
```

Run frontend server:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd TikTok_Server
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## Folder Description

### TikTok_Frontend
Contains:
- Pages
- Components
- Context API
- Services
- Hooks
- UI Design
- Video Feed

### TikTok_Server
Contains:
- API Routes
- Controllers
- Middleware
- Prisma Database Configuration

---

## Main Functionalities

### Authentication
- Login using username
- User session stored using localStorage
- Logout functionality

### Video Feed
- Auto-playing videos
- Like and unlike system
- Comments
- Share feature

### Profile System
- Profile page
- Followers count
- Following count
- Uploaded videos count

### Following System
- Following page
- View followed users' videos

___

## Running the Project

Start Backend:

```bash
cd TikTok_Server
npm run dev
```

Start Frontend:

```bash
cd TikTok_Frontend
npm run dev
```

---

## Notes

- Videos are stored inside:
  
```bash
public/videos/
```

- Authentication is implemented using localStorage for demonstration purposes.

- This project is developed for educational purposes only.
