import { createSlice, current } from "@reduxjs/toolkit";


// here we are creating a slice
// first confifureation it takes the name of the slice
//  second it takes the initial state
//  third it takes the reducers, where we can write the logic to update the state

// the different action that you can perform on the cart is
// 1. add to cart
// 2. remove from cart
// so action is kind of small api's to communicate between with the store

// so there is a action and a reducer function mapped to the action
// reducer function takes 2 parameters
// 1. state
// 2. action

// in case of slice the reducer function here will update the state of the slice

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            // vanilla (older version) Redux => DON'T Mutate the state, returning a new state was mandatory
            // const newState = {...state};
            // newState.items.push(action.payload)
            // return newState

            // in the current version We have to mutate the state.
            // mutating the state directly form here.
           state.items.push(action.payload)

        //    redux is still doing same which developer was doing in the older version, making state immutable, but this time developer can mutate the state and redux in the background will take care of the immutability

        // for the redux now the immer library will take care of immutability, redux uses immer lirary under the hood
        // so immer takes the old state and the new state find the difference and update the state and return the new state

        // so redux still using pure function to update the state but we as developer can mutate the state
        },
        removeItem: (state, action)=>{
            state.items.pop()

        },
        // original state = {items:["pizza"]}
        clearCart: (state, action)=>{1
            // console.log(state) // {items:["pizza"]}
            // state.items = []
            // console.log(state) // {items:[]}

            // also over here the console.log of state won't work it will not show the data properly, so to log it properly we need to use console.log(current(state)), 
            // where current is a function provided by reduxjs/toolkit  

            // actually this state.item not modifying the array that contain pizza, rather its modifying the reference of the array in the local state variable but the array that contains pizza is not getting modified its still the same.

            // that's why for making the array empty we have to do this
            // state.items.length = 0  //[]
            state.items = []
            // NOte:- RTK says you have to either mutate the existing state directly or return a new state
            // so this will also going to work whatever you return from here it will replace in the original state
            // return {
            //     items:[]
            // }

            // here if you try this
            // state.items = []
            // you are adding a new reference to the state.items array, so you are not mutating the existing array, you are creating a new array and assigning it to the state.items. here this state variable is the local variable and you are assigning new array reference to it. It will not going to modify the actual state that we have passed over
        }
    }
})

// so createSlice return an object with having
// {
//     action: {
//         addItem: (state, action) => {},
//         removeItem: (state, action) => {},
//         clearCart: (state, action) => {},
//     },
//     reducer: (state, action) => {}
// }

// now we will export 2 things from here 
// 1. actions
// 2. reducer

// now we will export the actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// now we will export the reducer
export default cartSlice.reducer

// here you will see we have used the term "reducers" instead of "reducer" thats because we have multiple reducers for the same slice

//  when you are creating slice there are multiple reducers function that's why it is known as reducers.
// but while exporting we use the term reducer


