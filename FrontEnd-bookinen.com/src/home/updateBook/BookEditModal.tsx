import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import UpdateForm from "./UpdateForm";

export function BookEditModal({ book, trigger }: { book: any; trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>
        <UpdateForm book={book} onClose={() => {}} />
      </DialogContent>
    </Dialog>
  );
}
