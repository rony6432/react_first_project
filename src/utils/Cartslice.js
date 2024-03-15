import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
    name:'cart',
    initialState:{
    items:[]
},
reducers:{
    additem:(state,action)=>{
           state.items.push(action.payload);
    },
    removeitem:(state)=>{
         state.items.pop();
    },
    clearcart:(state)=>{
        state.items.length=0;
    }

}

})
export const{additem,removeitem,clearcart}=Cartslice.actions
export default Cartslice.reducer;