import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        allPrograms : [],
    },
    reducers : {
        SetUser : (state,action) => {
            return action.payload;
        },
        UpdateAllProgram : (state,action) => {
            return action.payload;
        }
    }
});

export const { SetUser , UpdateAllProgram } = userSlice.actions;

export default userSlice.reducer;