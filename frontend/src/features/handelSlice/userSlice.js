import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userId:"",
    name:"",
    userType:""
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,payload)=>{
            state.userId=action.payload.userId
        }
    }
})