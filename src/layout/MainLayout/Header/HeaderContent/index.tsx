import { Box, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useConfig from 'hooks/useConfig';
import { useMemo } from 'react';

import Search from './Search';
import Notification from './Notification';

const HeaderContent = () => {
  const { i18n, menuOrientation } = useConfig();

  // 에러가 걸려서 주석처리함
  // const downLG = useMediaQuery((theme: Theme) => theme?.breakpoints?.down('lg'));

  // const localization = useMemo;

  return (
    <>
      <Search />
      <Notification />
    </>
  );
};

export default HeaderContent;
