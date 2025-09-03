# 📚 Library Management System

A **full-stack web application** built with **Node.js, Express, MongoDB, React, TypeScript, Redux Toolkit, and TailwindCSS**.  
This system allows users to manage books, perform borrow operations, and track borrow summaries.  

---

## 🚀 Features

### 🔧 Backend (Node.js + Express + MongoDB)
- **Book Management**
  - Add, update, delete, and view books
  - Book schema includes: `title, author, genre, isbn, description, copies, available`
  - Auto-updates availability → if `copies = 0` → `available = false`

- **Borrow Management**
  - Borrow a book (reduces available copies)
  - Borrow summary using MongoDB aggregation → shows total borrow count per book

- **Error Handling**
  - Centralized error middleware
  - Validation & duplicate key error responses in JSON

- **Advanced Features**
  - Pagination, filtering, and sorting  
  - Example:  
    ```
    GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
    ```

---

Query Parameters:

.filter → filter by genre

.sortBy → field to sort (e.g., createdAt)

.sort → asc | desc

.limit → number of results

---
{
  "success": true,
  "data": [
    {
      "_id": "64f123abc4567890def12345",
      "title": "The Theory of Everything",
      "author": "Stephen Hawking",
      "genre": "SCIENCE",
      "isbn": "9780553380163",
      "description": "An overview of cosmology and black holes.",
      "copies": 5,
      "available": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
  ]
}
---

### 💻 Frontend (React + TypeScript + Redux Toolkit Query)
- **Books Page (`/books`)**
  - Table showing all books (title, author, genre, ISBN, copies, available, actions)
  - Actions: View, Edit, Delete, Borrow

- **Add / Edit Book Pages**
  - Form to create or update books
  - Optimistic updates on submission

- **Borrow Page (`/borrow/:bookId`)**
  - Borrow form → select quantity + due date
  - Validation: cannot exceed available copies

- **Borrow Summary Page (`/borrow-summary`)**
  - Shows aggregated report of borrowed books with total quantities

- **UI / UX**
  - Navbar with navigation
  - Footer with credits
  - Responsive layout using TailwindCSS
  - Toast notifications for feedback

---

## 🛠️ Tech Stack

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- TypeScript  

**Frontend:**  
- React  
- TypeScript  
- Redux Toolkit + RTK Query  
- TailwindCSS  

**Others:**  
- ESLint + Prettier  
- Vite (for frontend bundling)  

---

## ⚡ API Endpoints

### 📘 Books

#### ➤ Get All Books
```http
GET /api/books

/project-root
│── backend
│ ├── src
│ │ ├── app.ts
│ │ ├── models/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── middlewares/
│ └── package.json
│
│── frontend
│ ├── src
│ │ ├── pages/
│ │ ├── components/
│ │ ├── store/
│ │ └── App.tsx
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup
```bash
cd backend
npm install
npm run dev

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```bash
cd frontend
npm install
npm run dev

🔄 Backend–Frontend Integration

    RTK Query hooks:

        .useGetBooksQuery() → /api/books

        .useCreateBookMutation() → POST /api/books

        .useBorrowBookMutation() → POST /api/borrow

        .useGetBorrowSummaryQuery() → /api/borrow/summary

✅ Deliverables

Separate repos/folders for backend & frontend

Proper README (this file)

Deployed links (Backend → Render/Heroku, Frontend → Vercel/Netlify)
👨‍💻 Author

Developed by Rahyan Akil ✨
🔗 GitHub | LinkedIn