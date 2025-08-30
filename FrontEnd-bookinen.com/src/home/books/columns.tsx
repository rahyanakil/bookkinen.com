import  {type ColumnDef } from "@tanstack/react-table"
export type Book = {
  title: string;
  author: string;
  genre: 'FICTION' | 'NON-FICTION' | 'SCIENCE' | 'HISTORY' | 'FANTASY' | 'BIOGRAPHY' | 'MYSTERY' | 'ROMANCE';
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
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
  },
]