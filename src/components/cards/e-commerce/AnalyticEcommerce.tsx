import { Box, Chip, ChipProps, Grid, Stack, Typography } from '@mui/material';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import MainCard from '../../MainCard';

interface Props {
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  color?: ChipProps['color'];
  extra: string;
}

const AnalyticEcommerce = ({ color = 'primary', title, count, percentage, isLoss, extra }: Props) => {
  return (
    <MainCard sx={{ p: 0 }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
          {percentage && (
            <Grid item>
              <Chip
                variant="filled"
                color={color}
                icon={
                  <>
                    {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                    {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  </>
                }
                label={`${percentage}`}
                sx={{ ml: 1.25, pl: 1 }}
                size="small"
              />
            </Grid>
          )}
        </Grid>
      </Stack>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="textSecondary">
          You made an extra{' '}
          <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
            {extra}
          </Typography>{' '}
          this year
        </Typography>
      </Box>
    </MainCard>
  );
};

export default AnalyticEcommerce;

// color 속성에 자동완성 되지 않는 textSecondary 같은 색상도 존재
// Stack이나 Grid나 기본적으로 div 태그다.
//! Chip의 variant 가 템플릿에 나온것과 무조건 일치하지 않는다!
//! 공식문서에서는 오직 'outlined'만 허용하는데 템플릿 코드는 'combined' 라고
//! 되어있어서 혼란이 발생했다!
//* 템플릿에 있는 코드를 무조건 신뢰하지말고 안되면 공식문서 API 참고할것!
//? isLoss의 출저를 알수 없다. 어디에서 주는지 모르겠ㄷ다.
// caption 태그는 텍스트를 더 작게 보이게 한다.
// 48행에 primary.main은 공식문서 Customization의 Default theme viewer를 참고할것
