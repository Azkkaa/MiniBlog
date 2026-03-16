<div align="center">
  <h1>📃 MiniBlog 📃</h1>
</div>

MiniBlog is a simple fullstack project built using Laravel as a REST API backend and React (Vite) as a Single Page Application (SPA) frontend.

This project focuses on implementing SPA behavior in React, where page transitions happen without full reload, while consuming data from a Laravel API.

---

<div align="center">

## 🚀 Tech Stack

### Backend

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

**Version Details:**
`Laravel 12+` • `Resource Controller` • `API Resource` • `MySQL`

<br/>

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Version Details:**
`React 19.2` • `Axios 1.13` • `Tailwind 4.2`

</div>

---

## 📌 Current Feature

- [x] List Post
- [x] List Category
- [x] Show Post by Category
- [x] Detail Post
- [x] Show Post by Author
- [x] Pagination for all list data
- [x] Search Page
- [x] Error Handling for HTTP Response Status Code
- [x] Responsive Design

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

`GET /api/post`

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
