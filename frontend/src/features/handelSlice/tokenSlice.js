import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:"",
}

export const tokenSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        userlogin:(state,action)=>{
            state.token=action.payload;
        },
        userlogout:(state,action)=>{
            state.token=null;
        }
    }
})

export const {userlogin,userlogout}=tokenSlice.actions;

export default tokenSlice.reducer;