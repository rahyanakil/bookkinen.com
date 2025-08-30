import { useGetBooksQuery } from "@/redux/api/CreateBookApi"


export function dataTable() {
    
const {data,isLoading,}= useGetBooksQuery(undefined)

    if(isLoading){
        return <p>Loading</p>
    }
    return <div> Data Table</div>
}


