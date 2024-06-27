import { SvgIcon } from '@mui/material';
import { ReactComponent as ContactIcon } from '../images/contact-us-icon-copy.svg';
import { ReactComponent as ShippingIcon } from '../images/shipping-icon-copy.svg';
import { ReactComponent as ReturnsIcon } from '../images/return-icon-copy.svg';

const iconMap = {
  contact: ContactIcon,
  shipping: ShippingIcon,
  returns: ReturnsIcon,
};

function IconRenderer({ name, ...props }) {
  const IconComponent = iconMap[name.toLowerCase()];

  return IconComponent ? (
    <SvgIcon
      component={IconComponent}
      {...props}
      fill='none'
      viewBox='0 0 100 100'
      sx={{ width: '20px', height: '20px' }}
    />
  ) : null;
}

export default IconRenderer;
