import { useGetBooksQuery } from "@/redux/api/CreateBookApi";
import { DataTable } from "./data-table";
import { columns } from "./columns";
export default function  BookPage(){
    const {data,isLoading}= useGetBooksQuery(undefined)

    if(isLoading){
        return <p>Loading</p>
    }
    console.log(data)
    return (
    <div> 
        <DataTable data={data.data} columns={columns}></DataTable>
    </div>
    )
}