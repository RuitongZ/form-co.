import { Button } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  '&:hover': {
    backgroundColor: 'transparent !important',
  },
});

const buttonStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
};

const iconStyles = {
  color: '#000',
  border: '1px solid #000',
  width: '50px',
  height: '50px',
  padding: '10px',
  borderRadius: '50%',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#000',
  },
};

function ArrowButton({ onClick, direction }) {
  return (
    <StyledButton
      disableRipple
      onClick={onClick}
      sx={{
        buttonStyles,
      }}
    >
      {direction === 'left' ? (
        <ArrowBackIosNewOutlinedIcon sx={iconStyles} />
      ) : (
        <ArrowForwardIosOutlinedIcon sx={iconStyles} />
      )}
    </StyledButton>
  );
}

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
