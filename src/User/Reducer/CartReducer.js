import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Cart:[]
}

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {}
});

export const {} = CartReducer.actions

export default CartReducer.reducer