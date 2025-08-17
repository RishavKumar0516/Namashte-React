# _Episode 06 - Exploring the world_

## useEffect hook

- It is a special type of hook which takes 2 argument
1. callback function - mandatory
2. dependency array - optional

- useEffect will called every time the component gets rendered when there is no dependency array passed.

EX - useEffect(()=> {

})

- if dependency array is empty = [] => useEffect will be called on initial render(just once).

EX - useEffect(()=> {
    console.log("called on initial render");
}, [])

-  // if we pass dependency array with dependency = [btnNameReact] => useEffect will be called every time when dependency changes

EX - useEffect(()=> {
    console.log("called on initial render");
}, [btnNameReact])



## Points for the state
- Never create state outside your functional component.

- create the state variable every time inside the functional component at the top.

- Never create state variable inside the conditional statement, It will create in-consistency in react.

- Never create the state variable in the loop or inside the functions.


## React router dom

- here we are defining the configuration for our router
- configuration in the sense, what would happen if we call some specific path.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  }, 
  {
    path: "/about",
    element: <About />,
  }
]);

just specifying this configuration won't work, we need to render this configuration on the page.

- routerProvider is a component that the react router dom provides
we can use that to render our router configuration

EX - 
root.render(<RouterProvider router={appRouter} />);

- To show your own custom error page, if some error occoured or when user updated the url and we don't have any page with that routes then we can show the error page

EX -
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },

- React router dom provides you a special type of hook - useRouteError - it gives you more information about the error.

## children routes
Now If we go to about page the header is not showing there, it shows only on the home page.
so to show header on each (about and contact page)
we will pass children in the configuration.

EX - 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
]);

## Outlet component
now we want this as soon as url changes it should show the component relative to the path in the url.
      {/* ** if path  = /  */}
      <!-- <Body /> -->

      {/* ** if path  = /about  */}
      <!-- <About /> -->

      {/* ** if path  = /contact  */}
      <!-- <Contact /> -->

so to do this we use Outlet component from the react router dom
as soon as the url changes it will put the matching component just below the header component in place of Outlet component.

It will replace the outlet, so you won't find outlet component in the dom

# Link component from react router dom
- In react never use anchor tag to navigate to next page, it will reload the whole page.

- link works same as anchor tag, but its not reloading the whole page, It just refresh the component.
Thatswhy our react app is know as single page application(SPA).
EX- as we click on the about, it will replace the body component with the about component.
with out reloading the header or footer component.

It looks like the app compoent is blinking but its blinking due to updation in the dom.

# 2 types of Routing in web apps

- Client side routing - not making any network calls to show different page, as all the pages are alredy present in our app.

- Server side routing - when you click on the about on header it makes the network call and get the about.html page from the server side and shoes it in the ui

# dynamic routing
if we want to open the seperate page for the resturant detail we need a dynamic page, so we need to update the routing configuration

EX - 
  {
    path: "/resturant/:resId",
    element: <ResturantMenu />,
  }

# useParmas

this is a hook provide by react router dom. it helps you to read the id params from the url.

import {useParams} from "react-router-dom";
const {resId} = useParams;
- destructure the id with the name that you have used in your dynamic url.

- key should be always attached to the parent element inside the map.

