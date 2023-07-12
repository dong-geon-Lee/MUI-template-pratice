import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const TestComponents = () => {
  return (
    <Container>
      <Box border="1px solid #eee" p={2} borderRadius="0.2rem">
        <Typography variant="subtitle1" color="textSecondary">
          Total Page Views
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">4,42,236</Typography>
          <Chip
            variant="filled"
            icon={<RiseOutlined style={{ fontSize: '0.8rem', color: 'blue' }} />}
            label="59.3%"
            sx={{
              gap: '0.2rem',
              ml: 1.25,
              p: '0.4rem 0.2rem',
              borderRadius: '0.1rem',
              background: '#e0faff',
              border: '1px solid skyblue'
            }}
            size="small"
            component="div"
          />
        </Stack>
        <Typography fontSize="0.7rem" fontWeight="300" variant="caption" color="textSecondary" component="p" pt={2} pb={1}>
          You made an extra{' '}
          <Typography color="primary" component="span" variant="caption">
            35,000
          </Typography>{' '}
          this year
        </Typography>
      </Box>
    </Container>
  );
};

export default TestComponents;
