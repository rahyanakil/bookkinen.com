// File: UpdateForm.tsx

import { useForm } from "react-hook-form";
import { useUpdateBookMutation } from "@/redux/api/CreateBookApi";

interface UpdateFormProps {
  book: any; // you can replace with Book type
  onClose: () => void;
}

export default function UpdateForm({ book, onClose }: UpdateFormProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: book,
  });

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const onSubmit = async (data: any) => {
    try {
      await updateBook({ id: book._id, ...data }).unwrap(); // ✅ using _id
      onClose();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          {...register("title")}
          placeholder="Title"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Author */}
      <div>
        <label className="block text-sm font-medium mb-1">Author</label>
        <input
          {...register("author")}
          placeholder="Author"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Genre */}
      <div>
        <label className="block text-sm font-medium mb-1">Genre</label>
        <input
          {...register("genre")}
          placeholder="Genre"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* ISBN */}
      <div>
        <label className="block text-sm font-medium mb-1">ISBN</label>
        <input
          {...register("isbn")}
          placeholder="ISBN"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          {...register("description")}
          placeholder="Description"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Copies */}
      <div>
        <label className="block text-sm font-medium mb-1">Copies</label>
        <input
          type="number"
          {...register("copies")}
          placeholder="Copies"
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
}
