import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
// import MiniDrawerStyled from './MiniDrawerStyled';
import { DRAWER_WIDTH } from 'config';

interface Props {
  open: boolean;
  window?: () => Window;
  handleDrawerToggle?: () => void;
}

const MainDrawer = ({ open, handleDrawerToggle, window }: Props) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchDownMD ? (
        <>{drawerContent}</>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

export default MainDrawer;
