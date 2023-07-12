import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@mui/material';
import React from 'react';

const TestList = () => {
  return (
    <Grid container direction="column" width={360} border="1px solid #eee">
      <Grid item xs={12} sm={8} md={4} lg={3} p={1} sx={{ '.css-2s90m6-MuiAvatar-root': { color: '#52c41a', background: '#f6ffed' } }}>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>{/* 이미지 */}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Box>
                <Typography variant="subtitle1" fontSize="14px">
                  Order #002434
                </Typography>
              </Box>
            }
            secondary={
              <Box>
                <Typography variant="caption">Today, 2:00 AM</Typography>
              </Box>
            }
          />
          <ListItemSecondaryAction>
            <Typography>+ $1,400</Typography>
            <Typography textAlign="right">78%</Typography>
          </ListItemSecondaryAction>
        </ListItemButton>
        <Divider />
      </Grid>

      <Grid item xs={12} sm={8} md={4} lg={3} p={1} sx={{ '.css-2s90m6-MuiAvatar-root': { color: '#1890ff', background: '#e6f7ff' } }}>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>{/* 이미지 */}</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Order #984947" secondary="5 August, 1:45 AM" />
          <ListItemSecondaryAction>
            <Typography>+ $302</Typography>
            <Typography textAlign="right">8%</Typography>
          </ListItemSecondaryAction>
        </ListItemButton>
        <Divider />
      </Grid>

      <Grid item xs={12} sm={8} md={4} lg={3} p={1} sx={{ '.css-2s90m6-MuiAvatar-root': { color: '#ff4d50', background: '#fff1f0' } }}>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>{/* 이미지 */}</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Order #988784" secondary="7 hours ago" />
          <ListItemSecondaryAction>
            <Typography>+ $682</Typography>
            <Typography textAlign="right">16%</Typography>
          </ListItemSecondaryAction>
        </ListItemButton>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default TestList;
