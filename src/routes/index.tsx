import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';

import { Box, Container, Grid } from '@mui/material';

import TestComponents from 'pages/TestComponents';
import TestTable from 'pages/TestTable';
import TestList from 'pages/TestList';

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Container sx={{ display: 'block', padding: '2rem' }}>
          <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TestComponents />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TestComponents />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TestComponents />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TestComponents />
            </Grid>
          </Grid>

          <TestTable />
          <TestList />
        </Container>
      ),
      children: [{ path: '/', element: <></> }]
    },
    MainRoutes
  ]);
}
