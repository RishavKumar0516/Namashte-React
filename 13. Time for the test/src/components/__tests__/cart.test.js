import {screen, render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom";
import Cart from "../Cart";
import resturantDetailData from "../../utils/resturantDetailData";
import ResturantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import {act} from 'react';
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=> Promise.resolve({
    json:() => Promise.resolve(resturantDetailData)
}))

// mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    resId: "643652", // 👈 mocked resId value
  }),
}));


it("Shoould load the resturant menu component", async ()=> {
    await act(async ()=> render(
        <BrowserRouter future={{
    v7_startTransition: true,
  }}>
        <Provider store={appStore}>
             <Header />
            <Cart/>
            <ResturantMenu/>
        </Provider>
        </BrowserRouter>
    ))

const mainCourseItem = await screen.findByText(/Main Course/i);
    expect(mainCourseItem).toBeInTheDocument();

    fireEvent.click(mainCourseItem);

    const foodItems = screen.getAllByTestId("food-items");

    expect(foodItems.length).toBe(40);

    const addButton = screen.getAllByRole("button", {
        name: "Add"
    });

    fireEvent.click(addButton[0]);

    expect(
  screen.getByRole("link", { name: /Cart 1 items/i })
).toBeInTheDocument();

    fireEvent.click(addButton[1]);

    expect(screen.getByRole("link", {name: /Cart 2 items/i})).toBeInTheDocument();


})