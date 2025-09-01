import { BookAddModal } from "@/home/AddBook/bookAddModal";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white lg:px-28 lg:py-4 sm:p-4">
      <div className="container mx-auto flex items-center justify-between font-bold">
        <Link to="/">BOOKINEN.COM</Link>
        <div className="space-x-4">
          <Link to="/books" className="hover:underline">All Books</Link>
          <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
          <BookAddModal />
        </div>
      </div>
    </nav>
  );
}
