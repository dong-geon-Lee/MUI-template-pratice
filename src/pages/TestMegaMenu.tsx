import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Box,
  CardMedia,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Popper,
  Stack,
  Typography,
  Fade
} from '@mui/material';

import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';
import { DRAWER_WIDTH } from 'config';

import { ArrowRightOutlined, WindowsOutlined } from '@ant-design/icons';
import backgroundVector from 'assets/images/mega-menu/back.svg';
import imageChart from 'assets/images/mega-menu/chart.svg';
// import AnimateButton from 'components/@extended/AnimateButton';

const TestMegaMenu = () => {
  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  return (
    <Box>
      <IconButton sx={{ background: '#f0f0f0', color: 'black', borderRadius: '0.2rem' }} ref={anchorRef} onClick={handleToggle}>
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        popperOptions={{
          modifiers: [{ name: 'offset', options: { offset: [-180, 9] } }]
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ minWidth: 1000, maxWidth: 1224 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <Box sx={{ border: '1px solid #eee' }}>
                  <Grid container>
                    <Grid item md={4} sx={{ background: '#0967cf', width: '100%' }}>
                      <Stack direction="column" p={4}>
                        <Typography variant="h5" color="#fcfcfc">
                          Explore Components
                        </Typography>
                        <Typography color="#f0f0f0" fontWeight={300} fontSize="0.8rem" mt={2}>
                          Try our pre made component pages to check how it feels and suits as per your need.
                        </Typography>
                        <Stack direction="row" p={1} gap={2} alignItems="center" justifyContent="flex-start">
                          <Button
                            variant="contained"
                            sx={{ width: '100%', bgcolor: '#fefefe', color: 'black', fontSize: '0.8rem' }}
                            endIcon={<ArrowRightOutlined width="10px" height="10px" />}
                          >
                            View All
                          </Button>
                          <CardMedia component="img" src={imageChart} sx={{ width: 100 }} />
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item md={8}>
                      <Grid container p={4}>
                        <Grid item xs={4}>
                          <List
                            subheader={
                              <Box>
                                <Typography>Authentication</Typography>
                              </Box>
                            }
                          >
                            <ListItemButton>
                              <Stack>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot />
                                </ListItemIcon>
                              </Stack>
                              <ListItemText primary="Login" />
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText primary="Register" />
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText primary="Reset Password" />
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText primary="Forgot Password" />
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText primary="Verification Code" />
                            </ListItemButton>
                          </List>
                        </Grid>
                        <Grid item xs={4}>
                          <List
                            subheader={
                              <Box>
                                <Typography>Other Pages</Typography>
                              </Box>
                            }
                          >
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>About us</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>Contact us</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>Pricing</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>Payment</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>Construction</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>Coming Soon</ListItemText>
                            </ListItemButton>
                          </List>
                        </Grid>
                        <Grid item xs={4}>
                          <List
                            subheader={
                              <Box>
                                <Typography>Other Pages</Typography>
                              </Box>
                            }
                          >
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>404 Error</ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                              <ListItemIcon sx={{ minWidth: '20px' }}>
                                <Dot />
                              </ListItemIcon>
                              <ListItemText>Landing</ListItemText>
                            </ListItemButton>
                          </List>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default TestMegaMenu;
