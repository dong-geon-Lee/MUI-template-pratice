import { Avatar, Box, Grid, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';

const TestBoxList = () => {
  return (
    <Grid container alignItems="center">
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        sx={{ width: '100%', padding: '1.2rem', margin: '1rem 0', borderRadius: '0.2rem' }}
        border="1px solid #eee"
      >
        <Stack direction="row">
          <ListItemText
            primary="Help & Support Chat"
            secondary={
              <Box>
                <Typography variant="caption" component="p">
                  Typical replay within 5 min
                </Typography>
              </Box>
            }
          />
          <ListItemAvatar sx={{ display: 'flex', '.MuiAvatar-root ': { margin: '0 -0.4rem' } }}>
            <Avatar>A</Avatar>
            <Avatar>B</Avatar>
            <Avatar>C</Avatar>
            <Avatar>D</Avatar>
          </ListItemAvatar>
        </Stack>
        <ListItemButton
          sx={{
            display: 'block',
            background: '#1890ff',
            borderRadius: '0.2rem',
            mt: '1rem',
            textAlign: 'center',
            color: '#fcfcfc',
            fontWeight: '400',
            fontSize: '0.9rem'
          }}
        >
          Need Help
        </ListItemButton>
      </Grid>
    </Grid>
  );
};

export default TestBoxList;
