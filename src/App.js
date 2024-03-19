
import Blogs from "./components/Blogs";
import Login from "./components/login";
import Signup from "./components/signup";


import { BrowserRouter, createBrowserRouter, createRoutesFromElements , Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

function App() {


 const router =  createBrowserRouter(createRoutesFromElements(

                    <Route path="/" element={<RootLayout/>}>
                        <Route index element={<Blogs/>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/signup" element={<Signup />}/>
                    </Route>

 ))



  return (
    <div className="App">
       <RouterProvider router={router }/>
    </div>
  );
}

export default App;
