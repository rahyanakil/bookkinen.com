// // import { BookAddModal } from "@/home/AddBook/bookAddModal";
// // import { Link } from "react-router-dom";

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-slate-800 text-white lg:px-28 lg:py-4 sm:p-4">
// //       <div className="container mx-auto flex items-center justify-between">
// //         <div className="font-bold">BOOKINEN.COM</div>
// //         <div className="space-x-4">
// //           <Link to="/books" className="hover:underline">All Books</Link>
// //           <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
// //           <BookAddModal />
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }
// // src/main.tsx


// // src/main.tsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// // import { store } from "./redux/store";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom"; // ✅ import router
// import { store } from "./redux/features/store";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>   {/* ✅ Wrap your app */}
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );



// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/features/store";
import "./index.css";
import AppRouter from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter /> {/* ✅ All routes handled here */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
