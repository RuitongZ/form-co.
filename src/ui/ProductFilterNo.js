import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterProducts } from '../redux/productsSlice';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import CustomButton from './CustomButton';

function ProductFilter() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [designer, setDesigner] = useState('');
  const [type, setType] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const handleFilterChange = () => {
    dispatch(filterProducts({ category, brand, designer, type, isFeatured }));
  };

  return (
    <Box>
      <FormControl fullWidth margin='normal'>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Seating'>Seating</MenuItem>
          <MenuItem value='Table'>Table</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <InputLabel>Brand</InputLabel>
        <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='HAY'>HAY</MenuItem>
          <MenuItem value='&Tradition'>&Tradition</MenuItem>
          {/* Add more brands as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <InputLabel>Designer</InputLabel>
        <Select value={designer} onChange={(e) => setDesigner(e.target.value)}>
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Hee Welling'>Hee Welling</MenuItem>
          <MenuItem value='Viggo Boesen'>Viggo Boesen</MenuItem>
          {/* Add more designers as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Chair'>Chair</MenuItem>
          <MenuItem value='Lounge chair'>Lounge chair</MenuItem>
          <MenuItem value='Desk'>Desk</MenuItem>
          {/* Add more types as needed */}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
        }
        label='Featured'
      />
      <CustomButton
        btnName='Apply Filters'
        color='black'
        onClick={handleFilterChange}
      />
    </Box>
  );
}

export default ProductFilter;
