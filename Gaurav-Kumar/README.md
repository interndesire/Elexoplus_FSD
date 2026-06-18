# 🔐 Authentication System

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Mongoose](https://img.shields.io/badge/Mongoose-9.x-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com)
[![License](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)]()

A robust **RESTful User Authentication API** built with Node.js, Express.js, and MongoDB. Provides secure user registration, login, and logout functionality with bcrypt password hashing and comprehensive input validation.

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [API Testing](#-api-testing)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## ✨ Features

- **User Registration** — Create new accounts with validated fields
- **User Login** — Authenticate via email/username and password
- **User Logout** — Session termination endpoint
- **Password Security** — Bcrypt hashing with salt rounds
- **Duplicate Detection** — Prevents duplicate usernames, emails, and phone numbers
- **Input Validation** — Thorough request validation with structured error responses
- **Standardized Responses** — Consistent JSON response format across all endpoints
- **Async Error Handling** — Centralized async error management

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework & routing |
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | ODM for MongoDB |
| **bcrypt** | Password hashing |
| **cookie-parser** | Cookie handling |
| **cors** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |

---

## 📁 Project Structure

```
📦 Authentication-System
├── 📄 package.json
├── 📄 .env
├── 📄 .gitignore
└── 📂 src/
    ├── 📄 server.js              # App entry point
    ├── 📂 controllers/
    │   └── 📄 user.controller.js # Route handlers
    ├── 📂 db/
    │   └── 📄 db.js              # MongoDB connection
    ├── 📂 middlewares/            # Custom middleware (coming soon)
    ├── 📂 models/
    │   └── 📄 user.model.js      # User schema & model
    ├── 📂 routes/
    │   └── 📄 user.routes.js     # API route definitions
    └── 📂 utils/
        ├── 📄 ApiError.js        # Error response class
        ├── 📄 ApiResponse.js     # Success response class
        └── 📄 asyncHandler.js    # Async error wrapper
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://npmjs.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or local MongoDB instance)

### Installation

```bash
# Clone the repository
git clone https://github.com/interndesire/Elexoplus_FSD.git

# Navigate to the project directory
cd Gaurav-Kumar/Authentication-System

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the project root or update the existing one:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*
```

### Run the Server

```bash
# Development mode (with auto-restart)
npm run dev
```

The server will start at `http://localhost:8000` and connect to MongoDB automatically.

---

## 📡 API Endpoints

Base URL: `http://localhost:8000/api/v1/users`

### Register a New User

```http
POST /register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "userName": "johndoe",
  "password": "securePassword123",
  "phoneNumber": "+919876543210"
}
```

**Response** `200 OK`
```json
{
  "statusCode": 200,
  "data": {
    "_id": "...",
    "fullName": "John Doe",
    "email": "john@example.com",
    "userName": "johndoe",
    "phoneNumber": "+919876543210",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "message": "User registered sucessfully",
  "sucess": true
}
```

### Login

```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

Alternative: use `"userName"` instead of `"email"`.

**Response** `200 OK`
```json
{
  "statusCode": 200,
  "data": {
    "user": { "...user data without password..." }
  },
  "message": "User logged in sucessfully",
  "sucess": true
}
```

### Logout

```http
POST /logout
```

**Response** `200 OK`
```json
{
  "statusCode": 200,
  "data": "user logged out sucessfully",
  "message": "Sucess",
  "sucess": true
}
```

### Error Response Format

```json
{
  "statusCode": 400,
  "data": null,
  "message": "All feilds are required",
  "errors": [],
  "ssucess": false
}
```

| Status | Scenario |
|--------|----------|
| `400` | Missing or invalid fields |
| `401` | Invalid credentials |
| `404` | User not found |
| `409` | Duplicate user (username/email/phone) |
| `500` | Internal server error |

---

## 🔐 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8000` | Server port number |
| `MONGODB_URI` | — | MongoDB Atlas connection string |
| `CORS_ORIGIN` | `*` | Allowed CORS origin |

---

## 🧪 API Testing

A **Postman collection** is included for quick API testing:

📄 `Authentication-system.postman_collection.json`

Import it into [Postman](https://www.postman.com/downloads/) to get pre-configured requests for all endpoints.

---

## 🗺 Roadmap

- [x] User registration with validation
- [x] User login with credential verification
- [x] User logout
- [ ] JWT-based authentication tokens
- [ ] Auth middleware for protected routes
- [ ] Password reset flow
- [ ] Email verification
- [ ] Rate limiting & security headers
- [ ] Unit & integration tests

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/KumarGaurav007">Gaurav Kumar</a>
</div>
