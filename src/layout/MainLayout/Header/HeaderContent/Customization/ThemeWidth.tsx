// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// assets
import defaultLayout from 'assets/images/customization/default.svg';
import containerLayout from 'assets/images/customization/container.svg';

const ThemeWidth = () => {
  const theme = useTheme();

  const { container, onChangeContainer } = useConfig();

  const handleContainerChange = () => {
    onChangeContainer();
  };

  return (
    <RadioGroup row value={container ? 'container' : 'fluid'} onChange={handleContainerChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value="fluid" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: !container ? '#e6f7ff' : '#f5f5f5', p: 1 }}
                border={false}
                {...(!container && { boxShadow: true, shadow: theme.shadows[1] })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Fluid</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Radio value="container" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: container ? '#e6f7ff' : '#f5f5f5', p: 1 }}
                border={false}
                {...(container && { boxShadow: true, shadow: theme.shadows[1] })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={containerLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Container`</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
};

export default ThemeWidth;
