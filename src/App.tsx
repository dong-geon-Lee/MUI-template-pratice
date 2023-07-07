import React from 'react';
import DashboardDefault from './pages/dashboard/default';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

const App = () => {
  return (
    <div>
      {/* 진행중 */}
      <DashboardDefault />

      {/* 테스트 코드 */}
      {/* <Box mt={4} display="flex" alignItems="center">
        <Grid container item xs={8} justifyContent="space-between">
          <Typography variant="h5" component="p">
            Unique Visitor
          </Typography>
          <Stack direction="row" pr={1}>
            <Button color="secondary">Month</Button>
            <Button variant="outlined">Week</Button>
          </Stack>
        </Grid>
        <Grid container item xs={4} pl={2}>
          <Typography variant="h5" component="p">
            Income Overview
          </Typography>
        </Grid>
      </Box>
      <Grid container></Grid> */}

      {/* 공식문서 코드 */}
    </div>
  );
};

export default App;

/* 1. 카드 만들어보기  */

//   <Grid container mt={3}>
//   <Grid item xs={3} sx={{ p: '1rem', border: '1px solid #000', borderRadius: '0.4rem' }}>
//     <Stack direction="column" m="1rem 0">
//       <Typography variant="h5" component="p" color="gray">
//         Total Page Views
//       </Typography>
//       <Stack direction="row" alignItems="center" justifyContent="left" gap={1.5}>
//         <Typography variant="h4" component="p">
//           4,42,236
//         </Typography>
//         <Stack sx={{ background: '#1976d2', p: '0.4rem 1rem', borderRadius: '0.4rem' }} color="white">
//           59.3
//         </Stack>
//       </Stack>
//       <Typography variant="subtitle2" component="small" color="gray">
//         You made an extra{' '}
//         <Typography variant="caption" component="span" color="#3e89d8">
//           35,000
//         </Typography>{' '}
//         this year
//       </Typography>
//     </Stack>
//   </Grid>
//   <Grid item xs={3} sx={{ p: '1rem', border: '1px solid #000', borderRadius: '0.4rem', mr: '1rem' }}>
//     <Stack direction="column" m="1rem 0">
//       <Typography variant="h5" component="p" color="gray">
//         Total Page Views
//       </Typography>
//       <Stack direction="row" alignItems="center" justifyContent="left" gap={1.5}>
//         <Typography variant="h4" component="p">
//           4,42,236
//         </Typography>
//         <Stack sx={{ background: '#1976d2', p: '0.4rem 1rem', borderRadius: '0.4rem' }} color="white">
//           59.3
//         </Stack>
//       </Stack>
//       <Typography variant="subtitle2" component="small" color="gray">
//         You made an extra{' '}
//         <Typography variant="caption" component="span" color="#3e89d8">
//           35,000
//         </Typography>{' '}
//         this year
//       </Typography>
//     </Stack>
//   </Grid>
//   <Grid item xs={3} sx={{ p: '1rem', border: '1px solid #000', borderRadius: '0.4rem' }}>
//     <Stack direction="column" m="1rem 0">
//       <Typography variant="h5" component="p" color="gray">
//         Total Page Views
//       </Typography>
//       <Stack direction="row" alignItems="center" justifyContent="left" gap={1.5}>
//         <Typography variant="h4" component="p">
//           4,42,236
//         </Typography>
//         <Stack sx={{ background: '#1976d2', p: '0.4rem 1rem', borderRadius: '0.4rem' }} color="white">
//           59.3
//         </Stack>
//       </Stack>
//       <Typography variant="subtitle2" component="small" color="gray">
//         You made an extra{' '}
//         <Typography variant="caption" component="span" color="#3e89d8">
//           35,000
//         </Typography>{' '}
//         this year
//       </Typography>
//     </Stack>
//   </Grid>
//   <Grid item xs={3} sx={{ p: '1rem', border: '1px solid #000', borderRadius: '0.4rem' }}>
//     <Stack direction="column" m="1rem 0">
//       <Typography variant="h5" component="p" color="gray">
//         Total Page Views
//       </Typography>
//       <Stack direction="row" alignItems="center" justifyContent="left" gap={1.5}>
//         <Typography variant="h4" component="p">
//           4,42,236
//         </Typography>
//         <Stack sx={{ background: '#1976d2', p: '0.4rem 1rem', borderRadius: '1rem' }} color="white">
//           59.3
//         </Stack>
//       </Stack>
//       <Typography variant="subtitle2" component="small" color="gray">
//         You made an extra{' '}
//         <Typography variant="caption" component="span" color="#3e89d8">
//           35,000
//         </Typography>{' '}
//         this year
//       </Typography>
//     </Stack>
//   </Grid>
// </Grid>
