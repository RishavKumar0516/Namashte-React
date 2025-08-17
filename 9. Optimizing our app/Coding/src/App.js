import React, { lazy, Suspense } from "react";
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

// lazy is the function given by react comes as named export. Lazy takes a callback function as an argument. inside the callback function we have a import function which is not similar to the above import. This import is a function that takes the path of this grocery component.


const Grocery = lazy(() => import("./components/Grocery"));
// now you will see the javascript bundle doesn't load the grocery component. It doesn't have the code of the grocery component.

// But now If you go to the grocery page, you will see you got new javascript File(bundle) for the grocery component.
// so now we have splitted our app into to bundle. Now grocery has its own bundle and main bundle is seperated.

// but when we go to grocery page, then its showing error, because the grocery code takes times load and to come to the browser. but react tries to run the grocery code but it was not there. so react suspended the rendering.

// so to avoid this we use suspence component given by react. Now wrap our component with the suspence component.

// Now as react tries to render the component, but its not their. so it has to show something on the screen. so react will show the fallback component.
// you can give this inside the fallback in suspence

// this things can make your large scale application very fast with light weight and optimized


// so in system design interview, if you asked to design the ecommerce app. then you should say to the interviewer that we will use the lazy loading when my app grows. we use lazy loading to distribute my code into the chunks. 

// so when you use lozy loading all the code doesnot comes once. It will only come when it is requested.

// you cannot build a large scale application without lazy loading with 1000 of component or bundle size gets havier. 

const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
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
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
