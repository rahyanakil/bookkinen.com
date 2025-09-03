
// import { useState } from "react";
// import { useBorrowBookMutation } from "@/redux/api/borrowApi";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useNavigate } from "react-router-dom"; // ✅ added for redirect
// import { toast } from "sonner"; // ✅ toast library

// interface BorrowBookModalProps {
//   bookId: string; // MongoDB _id for the book
//   availableCopies: number;
// }

// export function BorrowBookModal({ bookId, availableCopies }: BorrowBookModalProps) {
//   const [open, setOpen] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [dueDate, setDueDate] = useState("");
//   const [borrowBook, { isLoading }] = useBorrowBookMutation();
//   const navigate = useNavigate(); // ✅ navigation

//   const handleBorrow = async () => {
//     if (quantity > availableCopies) {
//       toast.error("Quantity cannot exceed available copies!"); // ✅ toast instead of alert
//       return;
//     }

//     if (!dueDate || new Date(dueDate) < new Date()) {
//       toast.error("Due date must be today or a future date!"); // ✅ past date validation
//       return;
//     }

//     try {
//       await borrowBook({
//         bookId, // because borrowApi.ts already maps { book: bookId }
//         quantity,
//         dueDate,
//       }).unwrap();

//       toast.success("Book borrowed successfully!"); // ✅ success toast
//       setOpen(false);
//       setQuantity(1);
//       setDueDate("");

//       // ✅ redirect to borrow summary page
//       navigate("/borrow-summary");
//     } catch (err) {
//       console.error("Borrow API error:", err);
//       toast.error("Failed to borrow book."); // ✅ error toast
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button variant="outline">Borrow</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Borrow Book</DialogTitle>
//         </DialogHeader>
//         <div className="space-y-4">
//           <div>
//             <Label>Quantity</Label>
//             <Input
//               type="number"
//               value={quantity}
//               min={1}
//               max={availableCopies}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//             />
//           </div>
//           <div>
//             <Label>Due Date</Label>
//             <Input
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//             />
//           </div>
//           <Button onClick={handleBorrow} disabled={isLoading}>
//             {isLoading ? "Borrowing..." : "Confirm Borrow"}
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }



import { useState } from "react";
import { useBorrowBookMutation } from "@/redux/api/borrowApi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner"; // ✅ import Toaster

interface BorrowBookModalProps {
  bookId: string;
  availableCopies: number;
}

export function BorrowBookModal({ bookId, availableCopies }: BorrowBookModalProps) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const navigate = useNavigate();

  const handleBorrow = async () => {
    if (quantity > availableCopies) {
      toast.error("Quantity cannot exceed available copies!");
      return;
    }

    if (!dueDate || new Date(dueDate) < new Date()) {
      toast.error("Due date must be today or a future date!");
      return;
    }

    try {
      await borrowBook({ bookId, quantity, dueDate }).unwrap();
      toast.success("Book borrowed successfully!");
      setOpen(false);
      setQuantity(1);
      setDueDate("");
      navigate("/borrow-summary");
    } catch (err) {
      console.error("Borrow API error:", err);
      toast.error("Failed to borrow book.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ✅ Add Toaster inside modal */}
      <Toaster position="top-right" />
      <DialogTrigger asChild>
        <Button variant="outline">Borrow</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label>Quantity</Label>
            <Input
              type="number"
              value={quantity}
              min={1}
              max={availableCopies}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Due Date</Label>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <Button onClick={handleBorrow} disabled={isLoading}>
            {isLoading ? "Borrowing..." : "Confirm Borrow"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
