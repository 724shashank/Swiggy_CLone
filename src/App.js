import React, { lazy, Suspense,useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Redux/Store";
import "./css/App.css";

// Lazy-loaded components
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const App = () => {

  const [userData,setUserData]= useState("")
 
  return (
    <Provider store={store}>
    <UserContext.Provider value={{ loggedUser:userData,updateData:setUserData}}>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",  
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/menu/:resID", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
