import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';

import { Container } from '@mui/material';

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <Container sx={{ display: 'block', padding: '2rem' }}></Container>,
      children: [{ path: '/', element: <></> }]
    },
    MainRoutes
  ]);
}
