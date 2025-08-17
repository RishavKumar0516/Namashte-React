# _Episode 08 - Let's Get Classy_


# React Class Based Component
- It is a normal javascript class, which is extendend from the React.Component. 

- This react.component is a class given by react. UserClass is inheriting the property from the react.component

- It has a render method that return the jsx.

# Receiving the props in the class
- In class based component the way of passing the props is the same as functional component.

- To receive the props in the class based component we need to use constructor. You receieve the props inside the constructor.

and access them using 'this' anywhere in the class.

- whenever a new instance of class is created this contructor get called. This props gets extracted in the constructor.

NOTE: loading a class based component means creating the new instance of the class.

# Creating the state in the class based component
- creating state using hooks is a newer way that works in the functional component.

whenever a class loads the props comes inside the constructor, so this constructor is the best place to create the state variables.

we use 'state' keyword here to create the state variable and it is reserved.

EX - 
constructor (props) {
   this.state = {
       count: 0,
       likes: 0
   }
}

- this state is a big object which contains all of your state variables.

# Updating the state variable

 this.state.count = this.state.count + 1;  
 - this is the wrong way to update the state

- NEVER UPDATE THE STATE VARIABLE DIRECTLY

- React gives you the setState method to update the state in the class based component

EX -

    this.setState({
    count: this.state.count + 1,
    })

As soon as the state changed the react will redender this component.

 - Whenever a componnent is rendered or mounted on to the web page, it basically starts rendering their jsx, whevnever it sees a child component there, It start to loads the user class now.

 if this child component is class based component then at first constructor will gets called and then the render method called.

 if parent and child both are class based component then this is how things gets called.
 parent constructor 
 parent render
 child constructor
 child render
 child componentDidMount
 parent componentDidMount

 once parent is render method is called and sees the child component then it will go through the lifeCycle methods of its child component and runs their lifeCycle methods
 it will run the constructor -> render -> componentDidMount

 then once render method of parent completes then componentDidMount of parent gets called

 # different ways to create the import class based compoent
 1. import React from "react";
 class About extends React.Component

 2. import {Component} from "react";
 class About extends Component


 ## LifeCycle Methods

 ### 1 constructor(props)

- **Use Case:** Initializing state or binding event handlers.
- **Example:** Setting up initial values for the state or binding methods to this.

## render() 


## componentDidMount()
- this will called when the component is alredy mounted(or rendered/loaded initially) on the web page.

- It is used to make api calls.
Why we do this
we load the component with some details then make api calls and fill it with the details
--> initial render - show the simmerUi - make api calls  - show the api data

as we don't want to wait the api to return the data to render the component.

That's why we first render the component and then fetch the data.

## Their are 2 phase 
 1. render phase  - constructor + render
 2. commit phase - update the dom  + 

 In render phase the react is finding the diff between the virtual doms


## render phase
at first the constructor gets called and its create and initialize the state
then render function called, it will render with the default value of state. 
Now it will find the difference between the virtual dom using reconciliation

## commit phase 
Now it will commit ALL the changes at once in the dom.
and now componentDidMount gets called and update the state, 
once state is updated it again re-render it but this time with the updated value of the state.

again the updated changes will commit to the dom, and this time 
componentDidUpdate gets called

useEffect does not use the componentDidMount behind the schene.
so useEffect is not similar to the componentDidMount. Never compare both of them.



  React is a single page application. It has only one page, so once user clicks on the home, about, cart, payment etc. we only change the component



  refer this Link for understanding the class based component
  # LINK - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/






## Use Cases for Lifecycle Methods:

### 1. constructor(props)

- **Use Case:** Initializing state or binding event handlers.
- **Example:** Setting up initial values for the state or binding methods to this.

### 2. componentDidMount()

- **Use Case:** Fetching initial data, setting up subscriptions.
- **Example:** Making an API call to fetch data and setting it in the state.

### 3. shouldComponentUpdate(nextProps, nextState)

- **Use Case:** Optimizing performance by preventing unnecessary re-renders.
- **Example:** Comparing current props or state with next props or state and returning false if they are the same.

### 4. componentDidUpdate(prevProps, prevState)

- **Use Case:** Performing actions based on changes to props or state.
- **Example:** Making an API call when a prop changes.

### 5. componentWillUnmount()

- **Use Case:** Cleaning up resources before the component is destroyed.
- **Example:** Removing event listeners or canceling timers.