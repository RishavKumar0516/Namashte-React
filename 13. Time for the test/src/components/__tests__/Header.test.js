

// In the header component we are using the redux store and we are rendering it inside the JSDOM in isolation. as we have configured JSDOM to understand the react code, jsx code but redux is different its not react that's why you will get the error.

// so while rendering in the JSDOM we have to provide the redux store to the header compoent as we did in the App.js for entire app.

// we are also using the link component, that is not react and that comes form the react router dom. as we are rendering the header component in the isolation inside the JSDOM, we have to provide the router provider to the header component.

import Header from "../Header"
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load header component", ()=>{
    render(
        <BrowserRouter future={{
    v7_startTransition: true,
  }}>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
})

// it("Should render a header with 0 cart items", ()=>{
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//             <Header />
//         </Provider>
//         </BrowserRouter>
//     )

//     const cartCount = screen.getByText("Cart 0 items");
//     expect(cartCount).toBeInTheDocument();
// })

// you can even write the regex in the getByText function
it("Should render a header with 0 cart items", ()=>{
    render(
        <BrowserRouter future={{
    v7_startTransition: true,
  }}>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartCount = screen.getByText(/Cart/);
    expect(cartCount).toBeInTheDocument();
})

// lets test the click flow, when click on the login button it should change to the logout button, and vice versa

it("Should change the login button to logout button", ()=>{
    render(
        <BrowserRouter future={{
    v7_startTransition: true,
  }}>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);
    // fire event is used to simulate the different events like click, change etc

    const logOutButton = screen.getByRole("button", {name: "Logout"});
    expect(logOutButton).toBeInTheDocument();
})