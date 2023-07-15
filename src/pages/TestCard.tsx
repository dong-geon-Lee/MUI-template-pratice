import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import TestComponents from './TestComponents';

const TestCard = () => {
  return (
    <>
      <Container sx={{ marginBottom: '1.4rem' }}>
        <Typography>Dashboard</Typography>
      </Container>

      <Grid container>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TestComponents title="Total Page Views" price="4,42,236" percent="59.3%" text="You made an extra 35,000 this year" rise={true} />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TestComponents title="Total Users" price="78,250" percent="70.5%" text="You made an extra 8,900 this year" rise={true} />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TestComponents title="Total Order" price="18,800" percent="27.4%" text="You made an extra 1,943 this year" rise={false} />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TestComponents title="Total Sales" price="$35,078" percent="27.4%" text="You made an extra $20,395 this year" rise={false} />
        </Grid>
      </Grid>
    </>
  );
};

export default TestCard;
