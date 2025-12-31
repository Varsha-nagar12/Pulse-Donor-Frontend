import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'usr',
    initialState : {
        value : {
            islogin : false,
            name : undefined,
            role : undefined,
            token : undefined
        },
        donor : undefined
    },
    reducers : {
     setData : (state,action)=>{
        state.value = {...action.payload,islogin:true}
     },

     delData : (state, action)=>{
        state.value = {
            islogin : false,
            name : undefined,
            role : undefined,
            token : undefined
        }
     },

     setdonor : (state, action)=>
     {
        var info = action.payload;
        state.donor = info;
     }
    }
})

export default slice.reducer;
export const {setData,delData,setdonor} = slice.actions; 