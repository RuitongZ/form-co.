import { Button } from '@mui/material';

function CustomButton({ btnName, color, onClick }) {
  const isBlack = color === 'black';

  return (
    <Button
      disableRipple
      onClick={onClick}
      sx={{
        padding: '12px 40px ',
        border: `1px solid ${isBlack ? '#000' : '#fff'}`,
        borderRadius: '50px',
        color: isBlack ? '#000' : '#fff',
        textTransform: 'capitalize',
        fontSize: '12px',
        fontWeight: '400',
        ':hover': {
          color: isBlack ? '#fff' : '#000',
          backgroundColor: isBlack ? '#000' : '#fff',
        },
      }}
    >
      {btnName}
    </Button>
  );
}

export default CustomButton;
