import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("favlist") ? JSON.parse(localStorage.getItem("favlist")) : [],
}


const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setAddItemToCart: (state, action) => {

            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
            }
            else {
                const temp = {
                    ...action.payload,
                }
                state.cartItems.push(temp);
            }
            localStorage.setItem('favlist', JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            console.log("triggered")
            // console.log(item.id);
            console.log(action.payload)
            state.cartItems = removeItem;
            localStorage.setItem('favlist', JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("favlist", JSON.stringify(state.cartItems));
        },


    }

});

export const { setAddItemToCart, setRemoveItemFromCart, setClearCartItems, } = CartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;



export default CartSlice.reducer;