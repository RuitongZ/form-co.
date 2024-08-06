import { createSlice } from '@reduxjs/toolkit';
import { All_PRODUCTS_DATA } from '../data/all-products-data';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    shuffledProducts: All_PRODUCTS_DATA,
    filteredProducts: [],
    carouselProducts: [],
    product: null,

    displayedProducts: All_PRODUCTS_DATA.slice(0, 12),
    currentPage: 1,
    itemsPerPage: 12,
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

      state.currentPage = 1;
      state.displayedProducts = shuffledArray.slice(0, state.itemsPerPage);

      console.log('shuffleProducts:', shuffledArray, state.displayedProducts);
    },

    filterCarouselProducts: (state, action) => {
      const { isFeatured, category } = action.payload;
      const filteredCarouselProducts = All_PRODUCTS_DATA.filter(
        (item) =>
          (isFeatured ? item.featured === true : true) &&
          (category ? item.category === category : true)
      );
      state.carouselProducts = filteredCarouselProducts;

      state.currentPage = 1;
      state.displayedProducts = filteredCarouselProducts.slice(
        0,
        state.itemsPerPage
      );

      console.log('carouselProducts:', filteredCarouselProducts);
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

      state.currentPage = 1;
      state.displayedProducts = filteredValue.slice(0, state.itemsPerPage);

      console.log('filteredProducts:', filteredValue);
    },

    setPriceLtoH: (state) => {
      const parsePrice = (price) => parseFloat(price.replace(',', ''));
      state.shuffledProducts = [...state.shuffledProducts].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );

      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );

      state.carouselProducts = [...state.carouselProducts].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );

      state.displayedProducts =
        state.filteredProducts.length > 0
          ? state.filteredProducts.slice(0, state.itemsPerPage)
          : state.carouselProducts.length > 0
          ? state.carouselProducts.slice(0, state.itemsPerPage)
          : state.shuffledProducts.slice(0, state.itemsPerPage);
    },

    setPriceHtoL: (state) => {
      const parsePrice = (price) => parseFloat(price.replace(',', ''));
      state.shuffledProducts = [...state.shuffledProducts].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );

      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );

      state.carouselProducts = [...state.carouselProducts].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );

      state.displayedProducts =
        state.filteredProducts.length > 0
          ? state.filteredProducts.slice(0, state.itemsPerPage)
          : state.carouselProducts.length > 0
          ? state.carouselProducts.slice(0, state.itemsPerPage)
          : state.shuffledProducts.slice(0, state.itemsPerPage);
    },

    setAtoZ: (state) => {
      state.shuffledProducts = [...state.shuffledProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      state.carouselProducts = [...state.carouselProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      state.displayedProducts =
        state.filteredProducts.length > 0
          ? state.filteredProducts.slice(0, state.itemsPerPage)
          : state.carouselProducts.length > 0
          ? state.carouselProducts.slice(0, state.itemsPerPage)
          : state.shuffledProducts.slice(0, state.itemsPerPage);
    },

    setProduct: (state, action) => {
      const productId = action.payload;
      const foundProduct = All_PRODUCTS_DATA.find(
        (item) => item.id === productId
      );
      state.product = foundProduct || null;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;

      state.displayedProducts =
        state.filteredProducts.length > 0
          ? state.filteredProducts.slice(startIndex, endIndex)
          : state.carouselProducts.length > 0
          ? state.carouselProducts.slice(startIndex, endIndex)
          : state.shuffledProducts.slice(startIndex, endIndex);

      console.log(state.currentPage);
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
  setCurrentPage,
} = productsSlice.actions;

export default productsSlice.reducer;
