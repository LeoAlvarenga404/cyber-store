import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsProps } from "../components/product-card";

interface CartState {
  items: ProductDetailsProps[];
}

const INITIAL_STATE: CartState = {
  items: [],
};

const sliceCart = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, { payload }: PayloadAction<ProductDetailsProps>) {
      state.items.push(payload);
      console.log(state.items);
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export default sliceCart.reducer;
export const { addToCart, removeFromCart } = sliceCart.actions;

interface RootState {
  cart: CartState;
}

export const useCart = (state: RootState) => state.cart.items;
