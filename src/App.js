import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
//import Cart from "./components/Cart";
import { RestaurantMenu } from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from  "react-router";
import "./css/App.css";



const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Cart = lazy(()=>import("./components/Cart"))

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/cart",
        element:<Suspense fallback={"Loading the Page"}><Cart /></Suspense>,
      },
      {
        path:"/menu/:resID",
        element:<RestaurantMenu />,
      }
    ],
    errorElement:<Error />,
  },
  
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
