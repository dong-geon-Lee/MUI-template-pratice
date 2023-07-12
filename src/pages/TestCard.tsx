import { Grid } from '@mui/material';
import React from 'react';
import TestComponents from './TestComponents';

const TestCard = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TestComponents />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TestComponents />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TestComponents />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TestComponents />
      </Grid>
    </Grid>
  );
};

export default TestCard;
