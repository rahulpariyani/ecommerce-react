import { createSlice } from "@reduxjs/toolkit";

export const s__product = createSlice({
  name: "Product",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    increaseProductQty: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.qty += quantity;
      }
    },

    decreaseProductQty: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.qty -= quantity;
        if (product.qty <= 0) {
          const index = state.findIndex((p) => p.id === id);
          state.splice(index, 1);
        }
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseProductQty,
  decreaseProductQty,
} = s__product.actions;
