// src/home/books/BorrowBook.tsx
import { useState } from "react";
import { useBorrowBookMutation } from "@/redux/api/borrowApi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BorrowBookProps {
  bookId: string;
  availableCopies: number;
}

export default function BorrowBook({ bookId, availableCopies }: BorrowBookProps) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async () => {
    if (quantity > availableCopies) {
      alert("Quantity cannot exceed available copies!");
      return;
    }

    try {
      await borrowBook({ bookId, quantity, dueDate }).unwrap();
      alert("Book borrowed successfully!");
      setOpen(false);
      setQuantity(1);
      setDueDate("");
    } catch {
      alert("Failed to borrow book.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Borrowing..." : "Confirm Borrow"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
