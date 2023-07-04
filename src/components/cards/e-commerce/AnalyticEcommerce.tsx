import { Box, Chip, ChipProps, Grid, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  color?: ChipProps["color"];
  extra: string;
}

const AnalyticEcommerce = ({
  color = "primary",
  title,
  count,
  percentage,
  extra,
}: Props) => {
  return (
    <>
      <Box sx={{ p: 2.25 }}>
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
                  variant="outlined"
                  color={color}
                  label={`${percentage}`}
                  size="small"
                />
              </Grid>
            )}
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default AnalyticEcommerce;

// color 속성에 자동완성 되지 않는 textSecondary 같은 색상도 존재
// Stack이나 Grid나 기본적으로 div 태그다.
// Chip의 variant 가 템플릿에 나온것과 무조건 일치하지 않는다!
// 공식문서에서는 오직 'outlined'만 허용하는데 템플릿 코드는 'combined' 라고
// 되어있어서 혼란이 발생했다!
