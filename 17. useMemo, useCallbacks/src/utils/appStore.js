import { configureStore } from "@reduxjs/toolkit";
// so creating the store is RDK(redux toolkit things) that's why the configureStore comes from redux toolkit
import cartReducer from "../utils/cartSlice";
import userReducer from "../utils/userSlice";

// we use the configureStore to create the store and pass the reducer

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});

// this reducer is the root reducer, its the reducer for the whole store, that's why it's called reducer
// this root reducer consists of multiple small reducers of different slices

// now to update the each slice in the store we need the seperate reducers function

export default appStore;

// as you can see here we have used the term "reducers" instead of "reducers" that we have used in the cartSlice. this is because here we have one reducer for the whole store/app.
// but when you are creating slice there are multiple reducers function that's why it is known as reducers.

