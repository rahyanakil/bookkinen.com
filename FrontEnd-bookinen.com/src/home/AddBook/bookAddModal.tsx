import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import AddForm from "./AddForm";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { useState } from "react";

export function BookAddModal() {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Books</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Wanna Create a New Book?</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the form below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        
        <AddForm onSuccess={() => setOpen(false)} />

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
