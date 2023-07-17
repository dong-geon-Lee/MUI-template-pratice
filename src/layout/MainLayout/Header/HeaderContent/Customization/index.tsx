import { useMemo, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, IconButton, Stack, Typography } from '@mui/material';

// assets
import {
  LayoutOutlined,
  HighlightOutlined,
  BorderInnerOutlined,
  BgColorsOutlined,
  SettingOutlined,
  CloseCircleOutlined,
  FontColorsOutlined
} from '@ant-design/icons';

import useConfig from 'hooks/useConfig';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import SimpleBar from 'components/third-party/SimpleBar';
import ThemeLayout from './ThemeLayout';

const Customization = () => {
  const theme = useTheme();
  const { container, fontFamily, mode, presetColor, miniDrawer, themeDirection, menuOrientation } = useConfig();

  const themeLayout = useMemo(() => <ThemeLayout />, [miniDrawer, themeDirection]);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <IconButton
          sx={{ color: 'black', borderRadius: '0.2rem', p: 0.8, bgcolor: open ? iconBackColorOpen : iconBackColor }}
          onClick={handleToggle}
        >
          <AnimateButton type="rotate">
            <SettingOutlined />
          </AnimateButton>
        </IconButton>
      </Box>
      <Drawer
        sx={{ zIndex: 2001 }}
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 340
          }
        }}
      >
        {open && (
          <MainCard
            title="Theme Customization"
            sx={{
              border: 'none',
              borderRadius: 0,
              height: '100vh',
              '& .MuiCardHeader-root': { color: 'background.paper', bgcolor: 'primary.main', '& .MuiTypography-root': { fontSize: '1rem' } }
            }}
            content={false}
            secondary={
              <IconButton size="small" onClick={handleToggle} sx={{ color: 'background.paper' }}>
                <CloseCircleOutlined style={{ fontSize: '1.15rem' }} />
              </IconButton>
            }
          >
            <SimpleBar
              sx={{
                '& .simplebar-content': {
                  display: 'flex',
                  flexDirection: 'column'
                }
              }}
            >
              <Box
                sx={{
                  height: 'calc(100vh - 64px)',
                  '& .MuiAccordion-root': {
                    borderColor: theme.palette.divider,
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'transparent',
                      flexDirection: 'row',
                      pl: 1
                    },
                    '& .MuiAccordionDetails-root': {
                      border: 'none'
                    },
                    '& .Mui-expanded': {
                      color: theme.palette.primary.main
                    }
                  }
                }}
              >
                <Accordion defaultExpanded sx={{ borderTop: 'none' }}>
                  <AccordionSummary>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <IconButton disableRipple color="primary" sx={{ bgcolor: 'skyblue', borderRadius: '0.2rem' }} onClick={handleToggle}>
                        <LayoutOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="textPrimary">
                          Theme Layout
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Choose your layout
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{}</AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                  <AccordionSummary>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <IconButton disableRipple color="primary" sx={{ bgcolor: 'skyblue', borderRadius: '0.2rem' }} onClick={handleToggle}>
                        <HighlightOutlined />
                      </IconButton>
                      <Stack>
                        <Typography variant="subtitle1" color="textPrimary">
                          Theme Mode
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Choose light or dark mode
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{}</AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary>
                    <Stack>
                      <IconButton>
                        <HighlightOutlined />
                      </IconButton>
                    </Stack>
                  </AccordionSummary>
                </Accordion>
              </Box>
            </SimpleBar>
          </MainCard>
        )}
      </Drawer>
    </>
  );
};

export default Customization;
