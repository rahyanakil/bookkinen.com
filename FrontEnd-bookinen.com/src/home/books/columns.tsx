import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { BookEditModal } from "../updateBook/BookEditModal";
import DeleteBookButton from "../DeleteBook/DeleteBook";
// import { BorrowBookModal } from "../borrow/BorrowBookModal";
// import { BorrowBookModal } from "../../borrow/BorrowBookModal";
import { BorrowBookModal } from "../borrow/BorrowBookModal";

export type Book = {
  _id: string; // important for update + delete
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON-FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "FANTASY"
    | "BIOGRAPHY"
    | "MYSTERY"
    | "ROMANCE";
  isbn: string;
  description?: string;
  copies: number;
  available: "Available" | "Unavailable";
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => {
      const copies = row.original.copies;
      return copies > 0 ? "Available" : "Unavailable";
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <div className="flex space-x-2">
          <BookEditModal
            book={book}
            trigger={<Button variant="outline" size="icon">✏️</Button>}
          />
          <DeleteBookButton id={book._id} />
          <BorrowBookModal bookId={book._id} availableCopies={book.copies} />
        </div>
      );
    },
  },
];
