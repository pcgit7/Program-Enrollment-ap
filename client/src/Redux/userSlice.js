import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        allPrograms : [],
        currentProgram : ''
    },
    reducers : {
        SetUser : (state,action) => {
            return {
                ...state,
                user : action.payload
            };
        },
        SetAllProgram : (state,action) => {
            return {
                ...state,
                allPrograms : action.payload
            };
        },
        SetCurrentProgram : (state,action) => {
            return {
                ...state,
                currentProgram : action.payload
            };
        }
    }
});

export const { SetUser , SetAllProgram ,SetCurrentProgram } = userSlice.actions;

export default userSlice.reducer;