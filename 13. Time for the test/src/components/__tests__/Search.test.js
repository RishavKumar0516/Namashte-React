// once the component gets rendered it shows all the resturant cards, but as soon as we filter it it shows only the filtered resturant cards.


// This time we need to render the body component then we can write the test cases.

// we will also writing test cases for making api calls and do async operations.

import Body from "../Body";
import { render, screen, fireEvent } from "@testing-library/react";
import resList from "../../utils/mockData";
import {act} from 'react';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// this global is a global object where this body is rendered.
// here we are definfing our own fetch funciton
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(resList)
    })
})

it("Should search rest list for burger text input",async ()=>{
    await act(async () => render(
   <BrowserRouter future={{
    v7_startTransition: true,
  }}>
    <Body/>
    </BrowserRouter>
));

    const cardsBeforeSearch = screen.getAllByTestId("res-card");
    expect(cardsBeforeSearch.length).toBe(20);

     const searchButton = screen.getByRole("button", { name:"Search"});

    //  console.log("searchButton", searchButton);

     const searchIput  = screen.getByTestId("search-input");

    //  console.log("searchIput", searchIput);
     fireEvent.change(searchIput, {target: {
        value: "Pizza"
     }})

     fireEvent.click(searchButton);

    //  get the resturant cards
    const resturantCards = screen.getAllByTestId("res-card");

    expect(resturantCards.length).toBe(3)
})

it("Should filter the top rated resturants", ()=>{
render(<BrowserRouter future={{
    v7_startTransition: true,
  }}>
    <Body/>
</BrowserRouter>)

const topRatedResturantButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

const cardBeforeSearch = screen.getAllByTestId("res-card");
expect(cardBeforeSearch.length).toBe(20);

fireEvent.click(topRatedResturantButton);

const cardsAfterSearch = screen.getAllByTestId("res-card");
expect(cardsAfterSearch.length).toBe(7);


})


// fetch function is not a part of js. it is a part of the browser. It is a brower api that was given by browser. Here we are rendering the react code inside the JSDOM. which is a browser like environment. but its not a real browser. so we need to write the mock function for the fetch api.

// whenever you are using the state updation inside the async operation you need render the element inside the act method.
// act function returns a promise. so we need to await the act function.

// if your element doesn't have any unique identifier then you can add the attribute data-testid in the element, and then you can use the getByTestId function to get the element.

// fireEvent.change is a function that is used to simulate the change event. it takes first argument as the element and second argument is the event object. From event object we can get the value.

// this event is you get by browser but here in the JSDOM we don't have the browser. so we need to fake it 