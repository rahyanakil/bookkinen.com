
// import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import BookPage from "./home/books/BookPage.tsx"
import './App.css'

function App() {
  return (
  <div>
  <Navbar/>
   <div className="w-[100%] flex items-center justify-center mt-5">
    
    <BookPage />
    
    </div>
    {/* <Footer/> */}
  </div>
   
  )
}

export default App