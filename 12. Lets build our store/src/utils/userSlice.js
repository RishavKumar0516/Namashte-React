import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetail: {
            name: "Rishav",
            age: 21
        }
    },
    reducers: {
        updateUser: (state, action) => {
            state.userDetail = action.payload
        },
        initializeUser: (state, action) => {
            state.userDetail = {
                name: "Rishav",
                age: 21
            }
        }
    }
})

export const { updateUser, initializeUser } = userSlice.actions;

export default userSlice.reducer;

// key inside the reducers object are the action type
// value inside the reducers object are the reducer function