import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';

import { Container } from '@mui/material';

import TestTable from 'pages/TestTable';
import TestList from 'pages/TestList';
import TestBoxList from 'pages/TestBoxList';
import TestCard from 'pages/TestCard';
import TestPopper from 'pages/TestPopper';
import TestMegaMenu from 'pages/TestMegaMenu';

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Container sx={{ display: 'block', padding: '2rem' }}>
          {/* <TestCard />
          <TestTable />
          <TestList />
          <TestBoxList />
          <TestPopper />
          <TestMegaMenu /> */}
        </Container>
      ),
      children: [{ path: '/', element: <></> }]
    },
    MainRoutes
  ]);
}
