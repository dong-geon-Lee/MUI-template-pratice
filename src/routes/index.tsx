import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';

import { Box, Grid } from '@mui/material';

import TestComponents from 'pages/TestComponents';
import TestTable from 'pages/TestTable';

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Box>
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
        </Box>
      ),
      children: [{ path: '/', element: <></> }]
    },
    MainRoutes
  ]);
}
