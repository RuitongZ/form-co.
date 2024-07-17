import { useDispatch } from 'react-redux';
import { filterProducts } from '../redux/productsSlice';
import { Link as RouterLink } from 'react-router-dom';

import CustomButton from './CustomButton';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Box)({
  width: '100%',
  height: '450px',
  border: '1px solid #000',
  position: 'relative',
  overflow: 'hidden',
});

const ImgCard = styled(Box)({
  objectFit: 'cover',
  width: '100%',
  height: '450px',
  transition: 'transform 0.5s ease-in-out',
});

const InfoBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: '-100%',
  width: '100%',
  height: '100%',
  backgroundColor: '#AA8B7A',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  color: '#000',
  transition: 'left 0.5s ease-in-out',
});

function CategoryCard({ category }) {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(filterProducts(value));
    console.log(value);
  };

  return (
    <StyledCard
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.infoBox').style.left = '0';
        e.currentTarget.querySelector('.imgCard').style.transform =
          'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.infoBox').style.left = '-100%';
        e.currentTarget.querySelector('.imgCard').style.transform = 'scale(1)';
      }}
    >
      <ImgCard
        className='imgCard'
        key={category.category}
        component='img'
        src={category.img}
        alt={category.category}
      />

      <InfoBox className='infoBox'>
        <Box
          key={category.category}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '50px',
            paddingBottom: '150px',
          }}
        >
          <Typography
            onClick={() => handleClick(category.category)}
            component={RouterLink}
            to={`products`}
            sx={{
              textDecoration: 'none',
              textTransform: 'capitalize',
              color: '#000',
              fontSize: '30px',
              paddingBottom: '10px',
            }}
          >
            {category.category}
          </Typography>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            {category.type.map((type, index) => (
              <Box key={index} sx={{ display: 'flex', gap: '10px' }}>
                <Typography
                  component={RouterLink}
                  to={`products`}
                  onClick={() => handleClick(type)}
                  textTransform='capitalize'
                  sx={{
                    textDecoration: 'none',
                    color: '#000',
                    textAlign: 'center',
                  }}
                >
                  {type}
                </Typography>
                {index < category.type.length - 1 && (
                  <Typography sx={{ color: '#000' }}>/</Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <CustomButton
          btnName='View more'
          color='black'
          RouterLink
          href={`products`}
        />
      </InfoBox>
    </StyledCard>
  );
}

export default CategoryCard;
