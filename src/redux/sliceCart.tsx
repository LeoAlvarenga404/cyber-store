import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsProps } from "../components/product-card";

export interface CartItem extends ProductDetailsProps {
  count: number;
}
interface CartState {
  items: CartItem[];
}

const INITIAL_STATE: CartState = {
  items: [],
};

const sliceCart = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, { payload }: PayloadAction<ProductDetailsProps>) {
      const existingItem = state.items.find((item) => item.id === payload.id);

      if (existingItem) {
        existingItem.count += 1;
        existingItem.price = (existingItem.price / (existingItem.count - 1)) * existingItem.count;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    addMoreItem(state, { payload }: PayloadAction<string>) {
      const existingItem = state.items.find((item) => item.id === payload);
      if (existingItem) {
        existingItem.count += 1;
        existingItem.price = (existingItem.price / (existingItem.count - 1)) * existingItem.count;
      }
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      const existingItem = state.items.find((item) => item.id === payload);
      if (existingItem) {
        if (existingItem.count <= 1) {
          state.items = state.items.filter((item) => item.id !== payload);
        } else {
          existingItem.price = (existingItem.price / existingItem.count) * (existingItem.count - 1);
          existingItem.count -= 1;
        }
      }
    },
  },
});

export default sliceCart.reducer;
export const { addToCart, removeFromCart, addMoreItem, removeItem } =
  sliceCart.actions;

interface RootState {
  cart: CartState;
}

export const useCart = (state: RootState) => state.cart.items;
