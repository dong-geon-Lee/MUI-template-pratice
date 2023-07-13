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
  Typography
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

const MegaMenuSection = () => {
  const theme = useTheme();

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75, zIndex: 2 }}>
      <IconButton
        color="primary"
        variant="light"
        sx={{ color: 'black', bgcolor: open ? 'gray' : '#f5f5f5' }}
        ref={anchorRef}
        onClick={handleToggle}
      >
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [{ name: 'offset', options: { offset: [-180, 9] } }]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top" in={open} {...TransitionProps}>
            <Paper
              sx={{
                boxShadow: theme.shadows[10],
                minWidth: 750,
                maxWidth: 1024,
                width: {
                  md: `calc(100vw - 100px)`,
                  lg: `calc(100vw - ${DRAWER_WIDTH + 100}px)`,
                  xl: `calc(100vw - ${DRAWER_WIDTH + 140}px)`
                }
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <Grid container>
                    <Grid item md={4} sx={{ background: '#35a0fa' }}>
                      <Box sx={{ p: 4.5, pb: 3 }}>
                        <Stack sx={{ color: '#fff' }}>
                          <Typography variant="h2" sx={{ fontSize: '1.875rem', mb: 1 }}>
                            Explore Components
                          </Typography>
                          <Typography variant="caption" component="h6">
                            Try our pre made component pages to check how it feels and suits as per your need.
                          </Typography>
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: 4 }}>
                            <Button variant="contained" sx={{ bgcolor: '#fcfcfc', color: 'black' }} endIcon={<ArrowRightOutlined />}>
                              View All
                            </Button>
                            {/* AnimateButton */}
                            <CardMedia component="img" src={imageChart} alt="Chart" sx={{ mr: -2.5, mb: -2.5, width: 124 }} />
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item md={8} p={2}>
                      <Box>
                        <Grid container spacing={6}>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              subheader={
                                <ListSubheader>
                                  <Typography variant="h1" fontSize="1rem" fontWeight={700}>
                                    Authentication
                                  </Typography>
                                </ListSubheader>
                              }
                              sx={{ mt: 2, '.css-10hburv-MuiTypography-root': { color: 'gray', fontWeight: '400', fontSize: '0.9rem' } }}
                            >
                              <ListItemButton disableRipple component={Link} target="_blank" to="/auth/login">
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot size={7} color="secondary" variant="outlined" sx={{}} />
                                </ListItemIcon>
                                <ListItemText primary="Login" sx={{ width: '100%' }} />
                              </ListItemButton>
                              <ListItemButton disableRipple>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Register" />
                              </ListItemButton>
                              <ListItemButton disableRipple>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Reset Password" />
                              </ListItemButton>
                              <ListItemButton disableRipple>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Forgot Password" />
                              </ListItemButton>
                              <ListItemButton disableRipple>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Verification Code" />
                              </ListItemButton>
                            </List>
                          </Grid>

                          <Grid item xs={4}>
                            <List
                              component="nav"
                              subheader={
                                <ListSubheader>
                                  <Typography variant="h1" fontSize="1rem" fontWeight={700}>
                                    Other Pages
                                  </Typography>
                                </ListSubheader>
                              }
                              sx={{ mt: 2, '.css-10hburv-MuiTypography-root': { color: 'gray', fontWeight: '400', fontSize: '0.9rem' } }}
                            >
                              <ListItemButton sx={{ mt: 2 }}>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="About us" />
                              </ListItemButton>

                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Contact us" />
                              </ListItemButton>

                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Pricing" />
                              </ListItemButton>
                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Payment" />
                              </ListItemButton>
                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Construction" />
                              </ListItemButton>
                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Coming Soon" />
                              </ListItemButton>
                            </List>
                          </Grid>

                          <Grid item xs={4}>
                            <List
                              component="nav"
                              subheader={
                                <ListSubheader>
                                  <Typography variant="h1" fontSize="1rem" fontWeight={700}>
                                    SASS Pages
                                  </Typography>
                                </ListSubheader>
                              }
                              sx={{ mt: 2, '.css-10hburv-MuiTypography-root': { color: 'gray', fontWeight: '400', fontSize: '0.9rem' } }}
                            >
                              <ListItemButton sx={{ mt: 2 }}>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="404 Error" />
                              </ListItemButton>

                              <ListItemButton>
                                <ListItemIcon sx={{ minWidth: '20px' }}>
                                  <Dot variant="outlined" color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary="Landing" />
                              </ListItemButton>
                            </List>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default MegaMenuSection;

// 해당 코드는 이벤트가 발생한 요소가 `anchorRef.current`를 포함하는 경우에 조건문을 실행하는 코드입니다.

// `anchorRef.current`는 React의 `useRef` 훅을 사용하여 생성된 참조(ref) 객체입니다. `contains()` 메서드는 DOM 요소의 메서드로, 해당 요소가 다른 요소를 포함하고 있는지 여부를 확인합니다.

// 이 코드는 주로 팝업 메뉴 또는 드롭다운 메뉴와 같이 클릭 이벤트 외부의 영역을 클릭하면 메뉴가 닫히는 동작을 구현할 때 사용됩니다. 예를 들어, 다음과 같은 상황을 가정해봅시다:

// - `anchorRef`는 메뉴를 트리거하는 요소(버튼 등)의 참조입니다.
// - 메뉴가 열려 있을 때, 사용자가 메뉴 외부를 클릭하면 메뉴가 닫히는 동작이 필요합니다.

// 이때, 클릭 이벤트가 발생한 요소(`event.target`)가 `anchorRef.current`를 포함하는지를 체크하기 위해 `contains()` 메서드를 사용합니다. `contains()` 메서드가 `true`를 반환하면, 이벤트가 `anchorRef.current` 또는 그 하위 요소에서 발생한 것이므로, 메뉴가 열린 상태에서의 외부 클릭이라고 판단하여 추가적인 동작을 수행하지 않고 함수를 종료합니다.

// 이렇게 함으로써, 메뉴 외부의 영역을 클릭했을 때 메뉴가 닫히는 동작을 구현할 수 있습니다.
