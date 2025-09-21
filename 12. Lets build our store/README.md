# Redux Toolkit

Redux is not a mandotary in react project

--> when you are building a small size application or mid size application you don't need react, It is needed in large size application where data is haviely used , where lot of read and write operation is happening in your react application, their are lots of components and data is passing here and there, 
use it only when it required.

Redux is not a part of react, its a seperate library which we install it in our projects and use it.


--> Redux is used for state management
--> when we use redux its become easier to debug
--> just like we have react tools, we also have redux dev tool

we will be learning react-redux which works as a bridge between react and redux

# today we will build cart flow using redux and redux toolkit and to store cart information we will be using redux store

 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - selector

we get the configureStore from the @reduxjs/toolkit
and we create a slice into the store using the configureStore

import { configureStore } from "@reduxjs/toolkit";
// so creating the store is RDK(redux toolkit) things that's why the configureStore comes from redux toolkit

once we create the slice now we want to provide it to the app using provider.

import {Provider} from "react-redux";
// provider comes from react redux, which is used to provide the store to the app, so the react redux works as a bridge between react and redux

now we can wrap our whole app with the provider as we were doing in the case of the context.

this provider takes the store as props
so you need to pass the store props 

just like context if you want to to use your store not for entire app, just for some part of the app, you can also do that just wrap that part with the provider.

Now we can create the slice in our store
create a seperate file named cartSlice

import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: [],
        <!-- you can add as many state here -->
    },
    reducers: {
        addToCart: (state, action)=> {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action)=> {
            state.items.pop();
        }
    }
    
})

createSlice takes 3 argument
1. name of the slice
2. initialState
3. reducers

then export action as named export
export const {addToCart, removeFormCart} = cartSlice.actions;

then export the reducer as default exports
export default cartSlice.reducer;


Now using the selector we can access the store 
  selector -  this is a hook (hook at the end is a normal function) and this hooks comes from the react-redux package. we can use this hook to access the state of the store.
  import {useSelector} from "react-redux";1


  # Notes
-> whenever using selector make sure you subscribe right portion of your store.
if you not subscribe right portion of your store their will be big performance loss.

for example this are the below 2 ways to subscribe the store

1. in the first step we are only subscribing the items of cart from the store. so an
    const cartItems = useSelector((store) => store.cart.items)

    // or

2. in the second step we are subscribing the whole store and then getting the specific data, so on subscribing the whole store, if any changes made to any of the slices in the store(userSlice, cartSlice etc) then you don't want this component to get affected by it. so never subscribe the whole store.
    // you can also do like this below, but it is less efficient 
    // const store = useSelector((store) => store)
    // const cartItems = store.cart.items


NOte:- a better way is to only subscribe the specific portion of the store
the name is selector is because you are selecting the specific portion of the store.


<!-- redux provide the redux dev tools -->
it show the logs of every actions, line of code from where it dispatches the action,
also write test casrs.
its very useful while debugging


you should use redux when your components gets very huge and managing data between the components gets very complex
like there are 1000 of components 
and many components are mutating the same state then in that case you should use reduxtoolkit



Read about RTK query  - middlware and thunks

rRK query quick start