import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <Box>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
