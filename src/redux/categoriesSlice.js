import { createSlice } from '@reduxjs/toolkit';

import { CATEGORIES } from '../data/categories';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: CATEGORIES,
    selectedCategory: 'All Products',
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
