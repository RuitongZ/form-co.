import { createSlice } from '@reduxjs/toolkit';
import { All_PRODUCTS_DATA } from '../data/all-products-data';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    shuffledProducts: [],
    filteredProducts: [],
    carouselProducts: [],
    product: null,
  },
  reducers: {
    shuffleProducts: (state) => {
      let shuffledArray = [...All_PRODUCTS_DATA];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      state.shuffledProducts = shuffledArray;
    },

    filterCarouselProducts: (state, action) => {
      const { isFeatured, category } = action.payload;
      state.carouselProducts = All_PRODUCTS_DATA.filter(
        (item) =>
          (isFeatured ? item.featured === 'true' : true) &&
          (category ? item.category === category : true)
      );
    },

    filterProducts: (state, action) => {
      const value = action.payload;
      const filteredValue = All_PRODUCTS_DATA.filter(
        (item) =>
          (value ? item.brand === value : true) ||
          (value ? item.designer === value : true) ||
          (value ? item.category === value : true) ||
          (value ? item.type === value : true)
      );
      state.filteredProducts = filteredValue;
    },

    setProduct: (state, action) => {
      const productId = action.payload;
      const foundProduct = All_PRODUCTS_DATA.find(
        (item) => item.id === productId
      );
      state.product = foundProduct || null;
    },
  },
});

export const {
  shuffleProducts,
  filterCarouselProducts,
  filterProducts,
  setProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
