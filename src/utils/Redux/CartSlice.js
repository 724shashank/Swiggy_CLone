import { createSlice } from "@reduxjs/toolkit";

const cartSilce = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{

            state.items.push(action.payload);

        },
        removeItem: (state,action)=>{

            state.items.pop();

       },
        clearCart: (state,action)=>{

            state.items.length=0;

        },
    }

})

export const {addItem,removeItem,clearCart} = cartSilce.actions;
 
 const cartReducers = cartSilce.reducer;

 export default cartReducers;
