import { Theme } from '@mui/material/styles';

const getShadow = (theme: Theme, shadow: string) => {
  switch (shadow) {
    case 'secondary':
      return theme.shadows[10];
    case 'error':
      return theme.shadows[11];
    case 'warning':
      return theme.shadows[12];
    case 'info':
      return theme.shadows[13];
    case 'success':
      return theme.shadows[14];
    case 'primaryButton':
      return theme.shadows[15];
    case 'secondaryButton':
      return theme.shadows[16];
    case 'errorButton':
      return theme.shadows[17];
    case 'warningButton':
      return theme.shadows[18];
    case 'infoButton':
      return theme.shadows[19];
    case 'successButton':
      return theme.shadows[20];
    default:
      return theme.shadows[21];
  }
};

export default getShadow;
