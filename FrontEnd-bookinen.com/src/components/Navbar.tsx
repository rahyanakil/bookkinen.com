import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white  lg:px-28 lg:py-4 sm:p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold">Library</div>
        <div className="space-x-4">
          <Link to="/books" className="hover:underline">All Books</Link>
          <Link to="/create-book" className="hover:underline">Add Book</Link>
          <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
        </div>
      </div>
    </nav>
  );
}
