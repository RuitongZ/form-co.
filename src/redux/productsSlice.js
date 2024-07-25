import { createSlice } from '@reduxjs/toolkit';
import { All_PRODUCTS_DATA } from '../data/all-products-data';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    shuffledProducts: All_PRODUCTS_DATA,
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
          (isFeatured ? item.featured === true : true) &&
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

    setPriceLtoH: (state) => {
      const parsePrice = (price) => parseFloat(price.replace(',', ''));
      state.shuffledProducts = [...state.shuffledProducts].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );

      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    },

    setPriceHtoL: (state) => {
      const parsePrice = (price) => parseFloat(price.replace(',', ''));
      state.shuffledProducts = [...state.shuffledProducts].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );

      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );
    },

    setAtoZ: (state) => {
      state.shuffledProducts = [...state.shuffledProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
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
  setPriceLtoH,
  setPriceHtoL,
  setAtoZ,
  setProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
