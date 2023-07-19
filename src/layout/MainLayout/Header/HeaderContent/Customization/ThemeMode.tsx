import { ChangeEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// assets
import defaultLayout from 'assets/images/customization/default.svg';
import darkLayout from 'assets/images/customization/dark.svg';

import { ThemeMode } from 'types/config';

const ThemeModeLayout = () => {
  const theme = useTheme();

  const { mode, onChangeMode } = useConfig();

  const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeMode(event.target.value as ThemeMode);
  };

  return (
    <RadioGroup row value={mode} onChange={handleModeChange}>
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        <Grid item>
          <FormControlLabel
            control={<Radio value="light" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: mode === 'light' ? '#e6f7ff' : '#f5f5f5', p: 1 }}
                border={false}
                {...(mode === 'light' && { boxShadow: true, shadow: theme.shadows[1] })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={defaultLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Light</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio value="dark" sx={{ display: 'none' }} />}
            sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard
                content={false}
                sx={{ bgcolor: mode === 'dark' ? '#e6f7ff' : '#f5f5f5', p: 1 }}
                border={false}
                {...(mode === 'dark' && { boxShadow: true, shadow: theme.shadows[1] })}
              >
                <Stack spacing={1.25} alignItems="center">
                  <CardMedia component="img" src={darkLayout} alt="Vertical" sx={{ borderRadius: 1, width: 64, height: 64 }} />
                  <Typography variant="caption">Darkz</Typography>
                </Stack>
              </MainCard>
            }
          />
        </Grid>
      </Grid>
    </RadioGroup>
  );
};

export default ThemeModeLayout;
