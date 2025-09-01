import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";

export default function BorrowSummary() {
  const { data: summaryRaw, isLoading, isError } = useGetBorrowSummaryQuery();

  // ✅ Guarantee array
  const summary = Array.isArray(summaryRaw) ? summaryRaw : [];

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to fetch borrow summary</p>;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Borrow Summary</h2>

      {summary.length === 0 ? (
        <p className="text-gray-500">No borrowed books yet.</p>
      ) : (
        <table className="w-full border border-gray-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">ISBN</th>
              <th className="border px-4 py-2 text-left">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((book: any, idx: number) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="border px-4 py-2">{book.book?.title || book.title}</td>
                <td className="border px-4 py-2">{book.book?.isbn || book.isbn}</td>
                <td className="border px-4 py-2">{book.quantity || book.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
