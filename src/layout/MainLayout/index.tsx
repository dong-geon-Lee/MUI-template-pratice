import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <Box>
      {/* Header 시작하기, HeaderContent 먼저보기 */}
      {/* 개발자 도구 보고 컴포넌트 구조 파악한게 도움이 됨 */}
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
