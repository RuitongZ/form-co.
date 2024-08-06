import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    clickedPage: null,
  },
  reducers: {
    setClickedPage: (state, action) => {
      const page = action.payload;
      state.clickedPage = page;
    },
  },
});

export const { setClickedPage } = pagesSlice.actions;
export default pagesSlice.reducer;
