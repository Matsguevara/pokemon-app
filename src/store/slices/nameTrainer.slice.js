import { createSlice } from "@reduxjs/toolkit";


const nameTrainerSlice = createSlice({
        name: "nametrainer",
        initialState: localStorage.getItem("nameTrainer") ?? "",
        reducers: {
             setNameTrainerGlobal: (state, action) => {
             localStorage.setItem("nametrainer", action.payload)
             return action.payload;
             },
             logOut: () => {
                localStorage.removeItem("nameTrainer")
                return ""
             }
        },
});

export const {setNameTrainerGlobal, logOut  } = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer;