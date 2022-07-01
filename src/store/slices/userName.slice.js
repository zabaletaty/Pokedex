import {createSlice} from "@reduxjs/toolkit";

export const userName = createSlice({
    name: "Nombre",
    initialState: null,
    reducers:{
        setNameGlobal: (state,action) => {
            return action.payload
        }
    }
})

export const { changeHola, setNameGlobal } = userName.actions
export default userName.reducer;