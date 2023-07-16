import { Container, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TestReportAreaChart from './TestReportAreaChart';

const TestAnalytics = () => {
  return (
    <Container sx={{ mt: '3rem', pt: '2rem', pb: '2rem' }}>
      <Typography variant="h6" color="black" fontSize="1rem" mb="1rem">
        Analytics Report
      </Typography>
      <List sx={{ width: '400px', border: '1px solid #eee' }}>
        <ListItem>
          <ListItemText
            primary="Company Finance Growth"
            sx={{ '.css-10hburv-MuiTypography-root': { color: 'gray', fontWeight: '300', fontSize: '0.9rem' } }}
          />
          <ListItemSecondaryAction sx={{ color: 'black', fontWeight: 700 }}>+45.14%</ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Company Expenses Ratio"
            sx={{ '.css-10hburv-MuiTypography-root': { color: 'gray', fontWeight: '300', fontSize: '0.9rem' } }}
          />
          <ListItemSecondaryAction sx={{ color: 'black', fontWeight: 700 }}>+0.58%</ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Business Risk Cases"
            sx={{ '.css-10hburv-MuiTypography-root': { color: 'gray', fontWeight: '300', fontSize: '0.9rem' } }}
          />
          <ListItemSecondaryAction>Low</ListItemSecondaryAction>
        </ListItem>
        <TestReportAreaChart />
      </List>
    </Container>
  );
};

export default TestAnalytics;
