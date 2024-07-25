import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterProducts,
  shuffleProducts,
  filterCarouselProducts,
} from '../redux/productsSlice';
import { selectCategory } from '../redux/categoriesSlice';

import { FILTERS } from '../data/filters';
import { Box, Typography } from '@mui/material';

const filterByStyles = {
  borderBottom: '1px solid #000',
  width: '100%',
  py: '5px',
  mb: '5px',
};

function FilterDrawerList({ onClick, onKeyDown }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const [clickedItem, setClickedItem] = useState(null);

  const handleClickAll = () => {
    dispatch(shuffleProducts());
    dispatch(filterProducts('reset'));
    dispatch(selectCategory('All Products'));
    dispatch(filterCarouselProducts({ category: 'reset' }));
    setClickedItem('all');

    console.log('all');
  };

  const handleFilterClick = (value) => {
    dispatch(filterProducts(value));
    dispatch(selectCategory(value));
    setClickedItem(value);

    console.log(value);
  };

  // Through line selected category
  useEffect(() => {
    selectedCategory === 'All Products'
      ? setClickedItem('all')
      : setClickedItem(selectedCategory);
  }, [selectedCategory]);

  return (
    <Box
      role='presentation'
      onClick={onClick(false)}
      onKeyDown={onKeyDown(false)}
      sx={{ paddingX: '30px', paddingY: '30px' }}
    >
      <Typography
        textTransform='uppercase'
        fontWeight={500}
        sx={{
          cursor: 'pointer',
          '&:hover': { textDecorationLine: 'line-through' },
          textDecorationLine: clickedItem === 'all' ? 'line-through' : 'none',
        }}
        onClick={handleClickAll}
      >
        All
      </Typography>
      {FILTERS.map((filterGroup, index) => (
        <Box key={index}>
          {Object.entries(filterGroup).map(([filterType, filterValues]) => (
            <Box key={filterType} sx={{ pb: '20px' }}>
              <Box sx={filterByStyles}>
                <Typography textTransform='capitalize' fontWeight={500}>
                  Filter by {filterType}
                </Typography>
              </Box>
              {Array.isArray(filterValues)
                ? filterValues.map((value) => (
                    <Box key={value} sx={{ py: '5px' }}>
                      <Typography
                        fontSize='14px'
                        sx={{
                          cursor: 'pointer',
                          '&:hover': { textDecorationLine: 'line-through' },
                          textDecorationLine:
                            clickedItem === value ? 'line-through' : 'none',
                        }}
                        onClick={() => handleFilterClick(value)}
                      >
                        {value}
                      </Typography>
                    </Box>
                  ))
                : Object.entries(filterValues).map(
                    ([subFilterType, subValues]) => (
                      <Box
                        key={subFilterType}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          py: '5px',
                        }}
                      >
                        <Typography
                          textTransform='capitalize'
                          sx={{
                            cursor: 'pointer',
                            '&:hover': { textDecorationLine: 'line-through' },
                            textDecorationLine:
                              clickedItem === subFilterType
                                ? 'line-through'
                                : 'none',
                          }}
                          onClick={() => handleFilterClick(subFilterType)}
                        >
                          {subFilterType}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px',
                          }}
                        >
                          {subValues.map((value) => (
                            <Typography
                              key={value}
                              textTransform='capitalize'
                              fontSize='14px'
                              fontWeight={300}
                              sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                  textDecorationLine: 'line-through',
                                },
                                textDecorationLine:
                                  clickedItem === value
                                    ? 'line-through'
                                    : 'none',
                              }}
                              onClick={() => handleFilterClick(value)}
                            >
                              {value}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    )
                  )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default FilterDrawerList;
