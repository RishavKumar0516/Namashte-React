# Higher order component

Higher order component is a function that takes a component and returns a component.

It takes the component as input and it enhances the component, adds some extra feature to that component and returns new component back.  


on swiggy website you will see some of the resturant card has promoted label

so we will try to implement this in our website too    
we have already created the cards
so we use this card and pass it to the some function and that will add the label based on the data that function will known as higher order component.


# all the react component has 2 layers 
1. UI layer
2. data Layer

UI layer is powered by the data layer.
data layer consists of props, state, local variable
If you handle your data layer very efficiently,  your application become very performanent.


# Lifting up your state
if you use the state for opening and closing the accordian inside the ResturantCategory then this state will get bind to each category and open and close the category based on actions

but if you want that some functionality like
when clicked on one accordian then all other should get closed so for this you need to liftt up the state
you need to define this inside the parent component of the ResturantCategory so then only all the category gets binded with one state.

and this is called lifting of your state.

# controlled and uncontrolled component - jargans or philosphy in react

when the ResturantCategory has the state for opening and closing the accordian then its said to be uncontrolled component, because his parent (ResturantMenu) doesn't have the control of opening and hiding the accordian
so here ResturantCategory has itself the control for showing and hiding the accordian so this is uncontrolled component

if I lift up the state for opening and closing the accordian, means opening and closing the accordian is done from the parent (ResturantMenu) then the ResturantCategory is known as controlled component
as it is getting controlled via props, its doesn't have its own state.

# props drilling
react has 1 way data flow the data gets passed from parent to children and to their children.
this is called props driling

-> http://react.dev/learn/passing-data-deeply-with-context

if we need to pass the data up to 1 or 2 level its ok
but if want to pass more then that then another way.

some time we want some data that can be accessable globally every where wherether we are at top of the node or bottom of the node.
so we need to put the data as centeral store
so we can use the context in react.
for ex - 
logged in user info
theme of app

Note:-  we should not blindely add all the data inside the context, only add the data that you want as centeralize over the entire application

# how to access the context inside the class based component

<UserContext.Consumer>
    {(data)=> console.log("accessing data from class component", data)}
</UserContext.Consumer>




