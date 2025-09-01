// App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookPage from "./home/books/BookPage";
import BorrowSummary from "./home/borrow/BorrowSummary";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] flex items-center justify-center mt-5">
        <Routes>
          {/* redirect root to /books */}
          <Route path="/" element={<Navigate to="/" replace />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/borrow-summary" element={<BorrowSummary />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
