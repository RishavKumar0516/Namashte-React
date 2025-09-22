import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
// provider comes from react redux, which is used to provide the store to the app, so the react redux works as a bridge between react and redux

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(()=> import("./components/Cart"));

const App = () => {
  const [userInfo, setUserInfo] = useState("");
  
  useEffect(()=> {
    // make an api call and get the user info
  
    setUserInfo("Rishav Kumar");
  }, [])

  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </Provider>
  );
};

// here we are defining the configuration for our router
// configuration in the sense, what would happen if we call some specific path.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Cart />
        </Suspense>
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
