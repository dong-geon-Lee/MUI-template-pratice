import { Box } from '@mui/material';
import { useMemo } from 'react';
import HeaderContent from './HeaderContent';

const Header: any = () => {
  const headerContent = useMemo(() => <HeaderContent />, []);

  return <Box>{headerContent}</Box>;
};

export default Header;
