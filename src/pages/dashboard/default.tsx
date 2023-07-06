import { useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import AnalyticEcommerce from '../../components/cards/e-commerce/AnalyticEcommerce';
import MainCard from '../../components/MainCard';
import IncomeAreaChart from '../../sections/dashboard/default/IncomeAreaChart';
import MonthlyBarChart from '../../sections/dashboard/default/MonthlyBarChart';
import OrdersTable from '../../sections/dashboard/default/OrdersTable';

const DashboardDefault = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss={true} color="warning" extra="1,943" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss={true} color="warning" extra="$20,395" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Unique Visitor</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recenter Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard>
          <OrdersTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;

// 1. container 는 flex flex-wrap width 가 축약된 표현이고 row와 column은 gap을 가리킨다.
// 2. xs는 12가 최대치이다. 이 숫자를 넘으면 다음 칸으로 아이템이 밀린다.
// 3. item 은 같은 Grid중에 구별하기 위한 일종의 속성이다.
// 4. sm 은 break point로 이것이 sm은 600px 이상일 경우 넣어준 column값만큼 width를 차지한다.

/*
 * 5. 구체적인 수치는 아래와 같다
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
 */

// Grid는 div태그다 무조건 display 형태가 grid라고 생각하면 안된다.
// 중요한건 xs 비율의 숫자를 어떤걸 사용했는가가 핵심이다.

/*
 * 6. isLoss 속성에 대해서  
 * isLoss가 했갈렸는데 그냥 컴포넌트 AnalyticEcommerce에 isLoss를 여기 컴포넌트에서 그냥 준거다. 
 * isLoss를 작성하게 되면 단축표현으로 true가 기본적으로 내장된다. 그래서 isLoss 속성이 배정된것과 
 * 그렇지않은 컴포넌트에 따라서 그래프 아이콘을 달라지게 되므로 UI를 변경하게 된다.

7. <Stack></Stack> 컴포넌트는 기본적으로 display: flex 형태로 세팅되어 있다.
<Grid></Grid> 컴포넌트는 그냥 div다. 
*/
