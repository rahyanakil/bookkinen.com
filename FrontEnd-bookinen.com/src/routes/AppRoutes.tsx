// src/routes/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar"; 
import BookPage from "@/home/books/BookPage";
import BorrowSummary from "@/home/borrow/BorrowSummary";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/borrow-summary" element={<BorrowSummary />} />
        {/* 404 fallback */}
        <Route path="*" element={<p className="text-center mt-20">Page Not Found</p>} />
      </Routes>
    </>
  );
}
