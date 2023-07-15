import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

interface Props {
  title: string;
  price: string;
  percent: string;
  text: string;
  rise: boolean;
}

const TestComponents = ({ title, price, percent, text, rise }: Props) => {
  return (
    <Container sx={{ minWidth: '300px', padding: 0 }}>
      <Box border="1px solid #eee" p={2}>
        <Stack direction="column" spacing={0.4}>
          <Typography variant="h6" color="textSecondary" fontSize="1rem">
            {title}
          </Typography>
          <Grid container gap="1rem" alignItems="center">
            <Typography variant="h6">{price}</Typography>

            <Chip
              icon={rise ? <RiseOutlined /> : <FallOutlined />}
              label={percent}
              sx={{ borderRadius: '0.2rem', background: rise ? '#e6f7ff' : '#fffbe6', color: rise ? '#53a9ff' : '#faad15' }}
            />
          </Grid>
          <Typography variant="caption" color="textSecondary" fontSize="0.8rem" noWrap pt={2} component="p" display="block">
            {text}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default TestComponents;
