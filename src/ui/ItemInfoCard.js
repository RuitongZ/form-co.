import { Box, Typography } from '@mui/material';

const containerStyles = {
  maxWidth: '280px',
  marginTop: '10px',
  paddingLeft: '10px',
  borderLeft: '1px solid #000',
  display: 'flex',
  justifyContent: 'space-between',
};

const formatCurrency = (value) => {
  return (
    'C' +
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumIntegerDigits: 2,
    }).format(value)
  );
};

const formattedItemPrice = (price) => formatCurrency(price);

function ItemInfoCard({ item }) {
  return (
    <Box sx={containerStyles}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          {item.brand}
        </Typography>
        <Typography
          sx={{ fontSize: '14px', textDecoration: 'none', color: 'inherit' }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{ fontSize: '12px', textDecoration: 'none', color: 'inherit' }}
        >
          {item.color}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontFamily: 'Cera Pro',
            fontWeight: 'medium',
            color: '#898989',
          }}
        >
          {formattedItemPrice(item.price)}
        </Typography>
      </Box>
    </Box>
  );
}

export default ItemInfoCard;
