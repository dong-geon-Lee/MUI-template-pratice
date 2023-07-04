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

const DashboardDefault = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      <Grid item xs={12} sx={{ mb: 1 }}>
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

/*
 * 6. isLoss 속성에 대해서  
 * isLoss가 했갈렸는데 그냥 컴포넌트 AnalyticEcommerce에 isLoss를 여기 컴포넌트에서 그냥 준거다. 
 * isLoss를 작성하게 되면 단축표현으로 true가 기본적으로 내장된다. 그래서 isLoss 속성이 배정된것과 
 * 그렇지않은 컴포넌트에 따라서 그래프 아이콘을 달라지게 되므로 UI를 변경하게 된다. ㄴ

*/
