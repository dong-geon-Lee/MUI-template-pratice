import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Popper,
  Typography,
  useMediaQuery
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import avatar5 from 'assets/images/users/avatar-5.png';
import { MailOutlined, CloseOutlined } from '@ant-design/icons';

const avatarSX = {
  width: 48,
  height: 48
};

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

const Message = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOepn) => !prevOepn);
  };

  const handleClose = (event: Event | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        size="medium"
        sx={{ color: 'black', bgcolor: '#f0f0f0', borderRadius: '0.24rem', p: 0.8 }}
        ref={anchorRef}
        onClick={handleToggle}
      >
        <MailOutlined />
      </IconButton>
      <Popper
        sx={{ zIndex: 2 }}
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 60 : 0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" in={open} position={matchesXs ? 'top' : 'top-right'} {...TransitionProps}>
            <Paper sx={{ width: '100%', minWidth: 400, maxWidth: 620 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  title="Message"
                  elevation={0}
                  border={false}
                  content={false}
                  secondary={
                    <IconButton size="small" onClick={handleToggle}>
                      <CloseOutlined />
                    </IconButton>
                  }
                >
                  <List
                    component="nav"
                    sx={{
                      p: 0,
                      '& .MuiListItemButton-root': {
                        py: 1.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                      }
                    }}
                  >
                    <ListItemButton sx={{ gap: '0.2rem' }}>
                      <ListItemAvatar>
                        <Avatar src={avatar2} alt="profile user" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="caption">
                            It&apos;s{' '}
                            <Typography variant="subtitle1" component="span">
                              Cristina danny&apos;s
                            </Typography>{' '}
                            birthday today.
                          </Typography>
                        }
                        secondary="2 min ago"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          3:00 AM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar src={avatar3} alt="profile user" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="caption">
                            <Typography variant="subtitle1" component="span">
                              Aida Burg
                            </Typography>{' '}
                            commented your post
                          </Typography>
                        }
                        secondary="6:00 PM"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          6:00 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar src={avatar4} alt="profile user" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="caption">
                            <Typography variant="subtitle1">There was a failure to your setup.</Typography>
                          </Typography>
                        }
                        secondary="7 hours ago"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption">2:45 PM</Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar src={avatar5} alt="profile user" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="caption">
                            <Typography variant="subtitle1">Cristina Danny invited to join Meeting.</Typography>
                          </Typography>
                        }
                        secondary="Dally scrum meeting time"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption">9:10 PM</Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemText primary="View All" sx={{ textAlign: 'center', p: 1.6, color: 'skyblue', fontWeight: 800 }} />
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Message;
