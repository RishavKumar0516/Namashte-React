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
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {

  // suppose I want to have a authentication in my app
  // we need to make an api call to check if the user is authenticated or not.

  const [userInfo, setUserInfo] = useState("");
  
  useEffect(()=> {
    // make an api call and get the user info
  
    setUserInfo("Rishav Kumar");
  }, [])

  // now the challenge is how I can pass this userInfo to the entire app
  // we can use context api to pass the userInfo to the entire app
  // we use Provider to provide the context value to the entire app
  // wrap the entire app with the UserContext.Provider, that means any where inside the app you will now get the new value of loggedInUser

  // suppose if you only wrap the header component with the UserContext.Provider, then only header component and its children will get the new value of loggedInUser, else other components will get the default value of loggedInUser
  // context is a global store where you can provide it to whole app or to a part of the app.

  // you can have similar multiple context providers in your app, and they can be nested as well.
  // for in case of nested providers, the innermost provider will override the value of the outer provider.
  // if you want to use provider for a part of the app, then you can wrap that part with the provider. just like in case of header component below.

  // so context is a global store where you can either provide it to whole app or to a part of the app.
  // whatever value you provide in the provider, that will be the value of you can access anywhere in the app.

  // context is in built feature of react, so you don't need to install any library to use context api.
  // you can use the context to make small and medium size app, but for large scale app, you should use state management library like redux or mobx.

  return (
    // here we will have defailt value of loggedInUser
  <UserContext.Provider value={{
    loggedInUser: userInfo, setUserInfo}}>
     {/* here we will have new value of loggedInUser as "Rishav Kumar" */}
    <div className="app">
      <UserContext.Provider value={{loggedInUser: "Elon musk"}}>
        {/* here we will have new value of loggedInUser as "Elon musk" */}
      <Header />
      </UserContext.Provider>
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
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
