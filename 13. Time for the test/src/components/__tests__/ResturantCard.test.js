import RestaurantCard from "../ResturantCard";
import {render, screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resturantCardMock.json"
import "@testing-library/jest-dom"

it("Should render ResturantCard component with prop data", ()=>{
    render(<RestaurantCard restaurantData={MOCK_DATA}/>)

    // check if this component name is present inside the 
    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})

// test case for with prompted label
it("should render ResturantCard with promoted label", ()=>{
    // Homework to chek the resturant card with promoted label
})