💻 Frontend (React + TypeScript + Redux Toolkit Query)

Books Page (/books)

Table showing all books (title, author, genre, ISBN, copies, available, actions)

Actions: View, Edit, Delete, Borrow

Add / Edit Book Pages

Form to create or update books

Optimistic updates on submission

Borrow Page (/borrow/:bookId)

Borrow form → select quantity + due date

Validation: cannot exceed available copies

Borrow Summary Page (/borrow-summary)

Shows aggregated report of borrowed books with total quantities

UI / UX

Navbar with navigation

Footer with credits

Responsive layout using TailwindCSS

Toast notifications for feedback

🛠️ Tech Stack

Backend:

Node.js

Express.js

MongoDB + Mongoose

TypeScript

Frontend:

React

TypeScript

Redux Toolkit + RTK Query

TailwindCSS

Others:

ESLint + Prettier

Vite (for frontend bundling)

⚡ API Endpoints
📘 Books

GET /api/books → Get all books (with filter, sort, pagination)

POST /api/books → Add a new book

GET /api/books/:id → Get single book

PUT /api/books/:id → Update book

DELETE /api/books/:id → Delete book

📖 Borrow

POST /api/borrow → Borrow a book

GET /api/borrow/summary → Borrow summary

📂 Project Structure
/project-root
│── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── middlewares/
│   └── package.json
│
│── frontend
│   ├── src
│   │   ├── pages/
│   │   ├── components/
│   │   ├── store/
│   │   └── App.tsx
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Backend Setup
cd backend
npm install
npm run dev


Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔄 Backend–Frontend Integration

RTK Query hooks:

useGetBooksQuery() → /api/books

useCreateBookMutation() → POST /api/books

useBorrowBookMutation() → POST /api/borrow

useGetBorrowSummaryQuery() → /api/borrow/summary

📸 Screenshots

(👉 Add your screenshots here once frontend is ready, e.g. Books page, Borrow page, Summary page)

✅ Deliverables

Separate repos/folders for backend & frontend

Deployed links (Backend → Vercel, Frontend → Vercel/Netlify)

👨‍💻 Author

Developed by Rahyan Akil ✨
👉 GitHub
 | LinkedIn

