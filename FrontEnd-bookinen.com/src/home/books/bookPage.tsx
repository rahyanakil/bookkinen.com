
import { useGetBooksQuery } from "@/redux/api/CreateBookApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";
// import { DataTable } from "@/components/ui/data-table"; // assuming you built one

function BookPage() {
  const { data: books, isLoading, error } = useGetBooksQuery({});

  if (isLoading) {
    return <div className="p-4">Loading books...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Failed to load books.</div>;
  }

  if (!books || books.length === 0) {
    return <div className="p-4">No books available.</div>;
  }

  console.log("Books:", books);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Library Books</h1>
      <DataTable columns={columns} data={books} />
    </div>
  );
}

export default BookPage;
