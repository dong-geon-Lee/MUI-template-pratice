import { useRef, useState, ReactNode, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, ButtonBase, CardContent, ClickAwayListener, Grid, Paper, Popper, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';

// project import
// import ProfileTab from './ProfileTab';
// import SettingTab from './SettingTab';
// import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';
import IconButton from 'components/@extended/IconButton';
// import useAuth from 'hooks/useAuth';

// assets
import avatar1 from 'assets/images/users/avatar-1.png';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return <div>Profile</div>;
};

export default Profile;
