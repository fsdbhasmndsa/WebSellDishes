import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios';

export const fetchCartFromServer = createAsyncThunk("cart/fetchCartFromServer", async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/Cart/viewCart", {

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    console.log("response.data.Listcart.items",response.data.Listcart)
    return response.data.Listcart ; // Giả sử API trả về danh sách sản phẩm trong giỏ hàng
  } catch (error) {
    console.error("Error fetching cart:", error);
    return localStorage.getItem("ListCart") == ""
    ? []
    : JSON.parse(localStorage.getItem("ListCart"))
  }
});

const initialState = {
  Cart: localStorage.getItem("ListCart") == ""
  ? []
  : JSON.parse(localStorage.getItem("ListCart")),
  loading: false,
  error: null
};

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemAction: (state, action) => {
      let itemadd = { ...action.payload, quantity: 1 };
      let index = state.Cart.findIndex(item => item._id === itemadd._id);
      if (index !== -1) {
        state.Cart[index].quantity += 1;
      } else {
        state.Cart.push(itemadd);
      }
      toast.success("Add successful");
      localStorage.setItem("ListCart", JSON.stringify(state.Cart));
    },
    deleteItemAction: (state, action) => {
      if (window.confirm("Do you want to delete this?")) {
        let index = state.Cart.findIndex(sp => sp._id === action.payload._id);
        state.Cart.splice(index, 1);
        localStorage.setItem("ListCart", JSON.stringify(state.Cart));
      }
    },
    increaseAmoutAction: (state, action) => {
      let newItem = state.Cart.find(sp => sp._id === action.payload._id);
      newItem.quantity += 1;
      localStorage.setItem("ListCart", JSON.stringify(state.Cart));
    },
    decreaseAmoutAction: (state, action) => {
      let newItem = state.Cart.find(sp => sp._id === action.payload._id);
      newItem.quantity -= 1;
      if (newItem.quantity < 1) {
        if (window.confirm("Do you want to delete this product?")) {
          let index = state.Cart.findIndex(sp => sp._id === action.payload._id);
          state.Cart.splice(index, 1);
        } else {
          newItem.quantity += 1;
        }
      }
      localStorage.setItem("ListCart", JSON.stringify(state.Cart));
    },
    clearItemAction: (state) => {
      if (window.confirm("Do you want to clear this basket?")) {
        state.Cart = [];
      }
      localStorage.setItem("ListCart", JSON.stringify(state.Cart));
    }
  }
  ,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartFromServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartFromServer.fulfilled, (state, action) => {
        state.Cart = action.payload;
        state.loading = false;
        // localStorage.setItem("ListCart", JSON.stringify(state.Cart));
      })
      .addCase(fetchCartFromServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { AddItemAction, decreaseAmoutAction, deleteItemAction, increaseAmoutAction, clearItemAction } = CartReducer.actions;
export default CartReducer.reducer;
