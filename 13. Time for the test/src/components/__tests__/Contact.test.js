import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us component", ()=>{
    const contact  = render(<Contact />)
    // here we are rendering this contact component to the JSDOM

    // Querying
    const heading =contact.getByRole("heading");
    // as above we have rendered the contact component to the JSDOM now I want to find something inside the rendered component. Ex - heading, button etc

    // there can be different role defined by react testing library like heading, button etc

    // Assertion
    expect(heading).toBeInTheDocument();
    // whenever we have to check something is loaded or not we have to use toBeInTheDocument
})


test("Should load button inside the Component", ()=>{
    render(<Contact />)
// finding the button inside the component
    // const button = screen.getByRole("button");
    // you can even find the element by text
    const buttonText = screen.getByText("Submit");

    // Assertion
    expect(buttonText).toBeInTheDocument();
})

test("Should load input with placeholder name", ()=>{
    render(<Contact />)

    // You can find the element bt placeHolderText
    const text = screen.getByPlaceholderText("Name");
    // Assertion
    expect(text).toBeInTheDocument();
})


test("should load 2 input boxes on the contact component", ()=>{
    render(<Contact />)

    const textBoxes = screen.getAllByRole("textbox");

    // console.log("textBoxes", textBoxes);
    // this logs will log the rect object of the element, as we all know that when we write the html in JSX it gets converted to react element object and then it gets comparered with the other virtual dom and then while rendering it gets converted to the html using babel.

    expect(textBoxes).toHaveLength(2);
    // expect(textBoxes).toBe(2)
})

// here above we have written the seperate test cases for the contact component, but we can also write a single test case for the contact component using describe block used or grouping the test cases together. You can have multiple describe blocks, also you can nest the describe block.

// You can use 'it' as alias of test. use only either use test or it.


describe("Contact Us Page Test Cases", ()=>{

    beforeAll(()=>{
        console.log("Running before all test cases");
    })

    beforeEach(()=>{
        console.log("Running before each test case");
    })

    afterEach(()=>{
        console.log("Running after each test case");
    })

    afterAll(()=>{
        console.log("Running after all test cases");
    })

   test("should load contact us component", ()=>{
       render(<Contact />)

       const messageContent = screen.getByText("Message");

       expect(messageContent).toBeInTheDocument();
   })

   test("should load 2 input boxes on the contact component", ()=>{
    render(<Contact />)
    const textBoxes = screen.getAllByRole("textbox");
    expect(textBoxes).toHaveLength(2);
})
})