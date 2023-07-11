import { Toolbar } from '@mui/material';
import { useMemo } from 'react';
import HeaderContent from './HeaderContent';

const Header = () => {
  const headerContent = useMemo(() => <HeaderContent />, []);

  return <div>{headerContent}</div>;
};

export default Header;
