

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form"; 
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useAddBookMutation } from "@/redux/api/CreateBookApi";

// // ✅ schema
// const formSchema = z.object({
//   title: z.string().min(1, { message: "Title is required." }),
//   author: z.string().min(1, { message: "Author is required." }),
//   genre: z.enum([
//     "FICTION",
//     "NON-FICTION",
//     "SCIENCE",
//     "HISTORY",
//     "FANTASY",
//     "BIOGRAPHY",
//     "MYSTERY",
//     "ROMANCE",
//   ]),
//   isbn: z.string().min(1, { message: "ISBN is required." }),
//   description: z.string().optional(),
//   copies: z.coerce.number().min(0, { message: "Copies must be 0 or more." }),
// });

// type FormData = z.infer<typeof formSchema>;

// interface AddFormProps {
//   onSuccess?: () => void;
// }

// function AddForm({ onSuccess }: AddFormProps) {
//     const [addBook,{isLoading}] = useAddBookMutation();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema) as any,
//     defaultValues: {
//       title: "",
//       author: "",
//       genre: "FICTION",
//       isbn: "",
//       description: "",
//       copies: 0,
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = async (values) => {
//     const res = await addBook(values);

//     if (onSuccess) onSuccess();
//     console.log(res)
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         {/* Title */}
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Title</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter book title" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Author */}
//         <FormField
//           control={form.control}
//           name="author"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Author</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter author's name" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Genre */}
//         <FormField
//           control={form.control}
//           name="genre"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Genre</FormLabel>
//               <Select onValueChange={field.onChange} value={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select genre" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   {formSchema.shape.genre.options.map((genre) => (
//                     <SelectItem key={genre} value={genre}>
//                       {genre}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* ISBN */}
//         <FormField
//           control={form.control}
//           name="isbn"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>ISBN</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter ISBN" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Description */}
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Optional description..." {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Copies */}
//         <FormField
//           control={form.control}
//           name="copies"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Copies</FormLabel>
//               <FormControl>
//                 <Input type="number" placeholder="Number of copies" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" disabled={isLoading}>Submit</Button>
//       </form>
//     </Form>
//   );
// }

// export default AddForm;


// File: AddForm.tsx

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddBookMutation } from "@/redux/api/CreateBookApi";
import { useNavigate } from "react-router-dom"; // ✅ added

// ✅ schema
const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  author: z.string().min(1, { message: "Author is required." }),
  genre: z.enum([
    "FICTION",
    "NON-FICTION",
    "SCIENCE",
    "HISTORY",
    "FANTASY",
    "BIOGRAPHY",
    "MYSTERY",
    "ROMANCE",
  ]),
  isbn: z.string().min(1, { message: "ISBN is required." }),
  description: z.string().optional(),
  copies: z.coerce.number().min(0, { message: "Copies must be 0 or more." }),
});

type FormData = z.infer<typeof formSchema>;

interface AddFormProps {
  onSuccess?: () => void;
}

function AddForm({ onSuccess }: AddFormProps) {
  const [addBook, { isLoading }] = useAddBookMutation();
  const navigate = useNavigate(); // ✅ added

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      title: "",
      author: "",
      genre: "FICTION",
      isbn: "",
      description: "",
      copies: 0,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    try {
      const res = await addBook(values).unwrap(); // ✅ unwrap to handle errors

      if (onSuccess) onSuccess();

      console.log("Book created:", res);

      // ✅ redirect to /books
      navigate("/books");
    } catch (err) {
      console.error("Create failed", err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter book title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Enter author's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Genre */}
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {formSchema.shape.genre.options.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ISBN */}
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="Enter ISBN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Optional description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Copies */}
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Number of copies" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default AddForm;
