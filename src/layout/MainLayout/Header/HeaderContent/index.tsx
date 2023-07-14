import { Box, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useConfig from 'hooks/useConfig';
import { useMemo } from 'react';

import Search from './Search';
import Notification from './Notification';
import Localization from './Localization';
import MegaMenuSection from './MegaMenuSection';
import Message from './Message';

const HeaderContent = () => {
  const { i18n, menuOrientation } = useConfig();

  // 에러가 걸려서 주석처리함
  // const downLG = useMediaQuery((theme: Theme) => theme?.breakpoints?.down('lg'));

  // const localization = useMemo;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '1rem 2rem' }}>
      <div></div>

      <Search />

      <Box sx={{ display: 'flex', gap: '0.4rem' }}>
        <MegaMenuSection />
        <Localization />
        <Notification />
        <Message />
      </Box>
    </Box>
  );
};

export default HeaderContent;
