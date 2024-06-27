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
        key={category.id}
        component='img'
        src={category.img}
        alt={category.name}
      />

      <InfoBox className='infoBox'>
        <Box
          key={category.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '50px',
            paddingBottom: '150px',
          }}
        >
          <Typography sx={{ fontSize: '30px', paddingBottom: '10px' }}>
            {category.name}
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            {category.categories}
          </Typography>
        </Box>
        <CustomButton btnName='View more' color='black' />
      </InfoBox>
    </StyledCard>
  );
}

export default CategoryCard;
