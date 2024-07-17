import { Grid, Typography } from '@mui/material';

import IconRenderer from '../components/IconRenderer';

function ServicePoint() {
  return (
    <>
      <Grid container columnSpacing={3} sx={{ display: 'flex' }}>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '10px',
          }}
        >
          <IconRenderer name='shipping' />
          <Typography fontSize='14px'>Free Shipping</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <IconRenderer name='returns' />
          <Typography fontSize='14px'>Easy Returns</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '10px',
          }}
        >
          <IconRenderer name='contact' />
          <Typography fontSize='14px'>Great Service</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ServicePoint;
