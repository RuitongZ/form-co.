import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ImgContainer = styled(Box)({
  maxWidth: { xs: '250px', sm: '280px' },
  height: '400px',
  margin: 'auto',
  border: '1px solid #000',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
});

const ImgCard = styled(Box)({
  display: 'block',
  objectFit: 'contain',
  backgroundColor: '#fff',
  width: '100%',
  height: '400px',
});

const OverlayImgCard = styled(Box)({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0,
  objectFit: 'cover',
  width: '100%',
  height: '400px',
  transition: '0.5s ease-in-out',
});

function ItemImgCard({ item }) {
  return (
    <ImgContainer
      key={item.id}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('.overlayImgCard').style.opacity = '100';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('.overlayImgCard').style.opacity = '0';
      }}
    >
      <ImgCard
        key={item.id}
        className='imgCard'
        component='img'
        src={item.img[0]}
        alt={item.name}
      />
      <OverlayImgCard
        className='overlayImgCard'
        component='img'
        src={item.img[1]}
        alt={item.name}
      />
    </ImgContainer>
  );
}

export default ItemImgCard;
