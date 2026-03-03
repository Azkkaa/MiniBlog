# MiniBlog

MiniBlog is a simple fullstack project built using Laravel as a REST API backend and React (Vite) as a Single Page Application (SPA) frontend.

This project focuses on implementing SPA behavior in React, where page transitions happen without full reload, while consuming data from a Laravel API.

---

## 🚀 Tech Stack

### Backend

- Laravel 12
- RESTful API
- Resource Controller
- API Resource
- MySQL

### Frontend

- React (Vite)
- Axios
- Tailwind CSS

---

## 📌 Current Feature

- Display list of posts from Laravel API

Upcoming features will be developed incrementally in future commits.

---

## 🧠 Project Goal

This project was built to:

- Practice building RESTful APIs using Laravel
- Implement React SPA architecture
- Consume API using Axios
- Manage loading state during data fetching
- Structure a clean frontend-backend integration

---

## 🗂 Project Structure

```text
MiniBlog/
│
├── backend/  # Laravel API
└── frontend/ # React SPA (Vite)
```

---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/miniblog.git
cd miniblog
```

---

### 2️⃣ Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Backend will run at: `http://localhost:8000`

---

### 3️⃣ Frontend Setup (React + Vite)

Open new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 🔗 API Endpoint Example

`GET /api/posts`

Example response:

```json
[
  {
    "id": 1,
    "title": "Sample Post",
    "content": "Lorem ipsum...",
    "author": {
      "id": 1,
      "name": "John Doe"
    },
    "category": {
      "id": 1,
      "name": "Technology"
    }
  }
]
```

---

## 📖 Notes

- This is a learning project focused on SPA implementation.
- Features will be expanded gradually in future commits.
- Backend serves dummy data for frontend consumption.

---

## 📄 License

This project is open-source and available for educational purposes.
