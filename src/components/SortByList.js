import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterCarouselProducts,
  filterProducts,
  setAtoZ,
  setCurrentPage,
  setPriceHtoL,
  setPriceLtoH,
} from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';

import { Box, Typography } from '@mui/material';

const list = ['featured', 'price low to high', 'price high to low', 'A to Z'];

function SortByList({ onClick, onKeyDown }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (type) => {
    setClickedItem(type);
    dispatch(setCurrentPage(1));

    if (type === 'featured') {
      dispatch(filterProducts('reset'));
      dispatch(filterCarouselProducts({ isFeatured: true }));
      dispatch(selectCategory('featured'));
    } else if (type === 'price low to high') {
      // dispatch(filterCarouselProducts({ category: 'reset' }));
      dispatch(setPriceLtoH());
      dispatch(selectCategory('price low to high'));
    } else if (type === 'price high to low') {
      // dispatch(filterCarouselProducts({ category: 'reset' }));
      dispatch(setPriceHtoL());
      dispatch(selectCategory('price high to low'));
    } else if (type === 'A to Z') {
      // dispatch(filterCarouselProducts({ category: 'reset' }));
      dispatch(setAtoZ());
      dispatch(selectCategory('A to Z'));
    }
    console.log(type);
  };

  // Through line selected category
  useEffect(() => {
    setClickedItem(selectedCategory);
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <Box
      role='presentation'
      onClick={onClick(false)}
      onKeyDown={onKeyDown(false)}
      sx={{ paddingX: '30px', paddingY: '30px' }}
    >
      {list.map((type) => (
        <Box key={type} sx={{ pb: '20px', px: '5px' }}>
          <Typography
            fontSize='14px'
            textTransform='capitalize'
            onClick={() => handleClick(type)}
            sx={{
              cursor: 'pointer',
              '&:hover': { textDecorationLine: 'line-through' },
              textDecorationLine:
                clickedItem === type ? 'line-through' : 'none',
            }}
          >
            {type}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default SortByList;
