import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import LibraryApi from "./component/libraryApi/LibraryApi";
import Notfound from "./component/Notfound/Notfound";
let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {index:true, element: <Home /> },
      {path:'about', element: <About/> },
      {path:'LibraryApi', element: <LibraryApi/> ,
  },
  {path:'*',element: <Notfound/>}

     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}/>
}
