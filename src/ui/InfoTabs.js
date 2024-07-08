import { useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const tabStyles = {
  fontSize: '16px',
  textTransform: 'capitalize',
  color: '#000',
  fontWeight: 400,
  '&.Mui-selected': {
    fontWeight: 500,
  },
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2, fontSize: '14px' }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function InfoTabs({ item }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='inherit'
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#000',
            },
          }}
        >
          <Tab
            disableRipple
            label='Description'
            {...a11yProps(0)}
            sx={tabStyles}
          />
          <Tab
            disableRipple
            label='Product Details'
            {...a11yProps(1)}
            sx={tabStyles}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {item.description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {item.productDetails}
        <Typography fontSize='14px'>Materials: {item.materials}</Typography>
      </CustomTabPanel>
    </Box>
  );
}

export default InfoTabs;
