import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@mui/material/styles';
import { CardMedia, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography, useMediaQuery } from '@mui/material';

import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

import { RootStateProps } from 'types/root';
import { LAYOUT_CONST } from 'types/config';

const ThemeLayout = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { miniDrawer, themeDirection, onChangeDirection, onChangeMiniDrawer, menuOrientation } = useConfig();
  // const {drawerOpen} = useSelector((state:RootStateProps))

  return <div>ThemeLayout</div>;
};

export default ThemeLayout;
