## 🌿 Landscape Architecture Website – README

### 📝 Overview

This is a portfolio website for a **landscape architect**, allowing potential clients to explore the offered services, view previous projects in a dynamic image gallery, and contact the architect through a form that sends an email.  
The website is structured into two parts: a **frontend** built with **React** and a **backend** built with **Node.js and Express**.

---

### 🗂️ Project Structure

```
project-root/
│
├── client/                  # Frontend - React
│   ├── src/
│   │   ├── components/      # Header, Footer
│   │   ├── pages/
│   │   │   ├── homepage/
│   │   │   ├── aboutUs/
│   │   │   ├── contact/
│   │   │   ├── allServices/
│   │   │   └── gallery/
│   │   ├── App.jsx          # Main routing setup
│   │   └── index.js
│   └── public/
│
├── server/                  # Backend - Express
│   ├── routes/
│   │   ├── contactRoutes.js     # Handles email sending
│   │   └── imageRoutes.js       # Serves image list
│   ├── public/images/           # Static image folder
│   └── server.js                # Main server file
│
├── README.md
└── .env
```

---

### 🌐 Page Descriptions (Frontend)

| URL            | Component     | Description |
|----------------|---------------|-------------|
| `/`            | `Home`        | Landing page showcasing the architect’s values and a call to action. |
| `/services`    | `AllServices` | Displays the full range of services offered in landscape architecture. |
| `/aboutUs`     | `AboutUs`     | Provides information about the business and personal professional background. |
| `/gallery`     | `Gallery`     | Dynamically loaded gallery from the server showing past projects. |
| `/contact`     | `Contact`     | A form where users can enter their contact details and send a message. |

---

### 🛠️ Backend Features

- Built with **Express.js**
- Serves static images from `public/images`
- `/api/images` endpoint returns a list of image filenames
- `/api/contact` handles POST requests for contact form submission and sends an email

#### Sample endpoint:

```http
GET /api/images
→ Returns: ["images/pic1.jpg", "images/pic2.jpg", ...]
```

---

### 📥 Local Setup Instructions

#### 1. Clone the repository:
```bash
git clone https://github.com/your-username/landscape-architecture-site.git
cd landscape-architecture-site
```

#### 2. Install backend dependencies:
```bash
cd server
npm install
```

#### 3. Install frontend dependencies:
```bash
cd ../client
npm install
```

#### 4. Create a `.env` file in the server folder:
```dotenv
PORT=3000
CLIENT_ORIGIN=http://localhost:5173
```

#### 5. Start the backend server:
```bash
cd server
node server.js
```

#### 6. Start the frontend (with Vite):
```bash
cd ../client
npm run dev
```

---

### 📸 Image Gallery

- Images are stored under: `server/public/images/`
- The `/api/images` route serves all images as a list
- In `Gallery.jsx`, images are fetched and displayed dynamically using the API

---

### 📤 Contact Form Functionality

- Users fill out a form with their name, email, phone, and message
- The form sends a POST request to `/api/contact`
- The server sends an email using a configured mail service (e.g. Nodemailer)

---

### 📦 Technologies Used

- **Frontend:** React, React Router, Vite
- **Backend:** Node.js, Express
- **Email Service:** Nodemailer or SMTP
- **CORS Support** for cross-origin requests between server and client

---

### 🔒 Notes

- Ensure the client and server are running on separate ports (`5173` and `3000`)
- Place image files directly in `server/public/images/` for them to be accessible
- The system can be extended to support image uploads and admin dashboard in the future

---

Let me know if you want to also include deployment instructions, license info, or visual screenshots.