import { createSlice } from '@reduxjs/toolkit';
import {
  formatCurrency,
  calculateSubtotal,
  calculateEstimatedTax,
  calculateTotalPrice,
} from '../utils/priceUtils';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectSubtotalPrice = (state) => {
  const items = selectCartItems(state);
  return formatCurrency(calculateSubtotal(items));
};

export const selectEstimatedTax = (state) => {
  const items = selectCartItems(state);
  const subtotal = calculateSubtotal(items);
  return formatCurrency(calculateEstimatedTax(subtotal));
};

export const selectTotalPrice = (state) => {
  const items = selectCartItems(state);
  const subtotal = calculateSubtotal(items);
  const estimatedTax = calculateEstimatedTax(subtotal);
  return formatCurrency(calculateTotalPrice(subtotal, estimatedTax));
};

export default cartSlice.reducer;
