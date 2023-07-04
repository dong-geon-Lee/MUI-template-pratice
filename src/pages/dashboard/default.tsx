import { useState } from "react";
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
  Typography,
} from "@mui/material";
import AnalyticEcommerce from "../../components/cards/e-commerce/AnalyticEcommerce";

const DashboardDefault = () => {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");

  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      <Grid item xs={12} sx={{ mb: 1 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Page Views"
          count="4,42,236"
          percentage={59.3}
          extra="35,000"
        />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;

// 1. container 는 flex flex-wrap width 가 축약된 표현이고 row와 column은 gap을 가리킨다.
// 2. xs는 12가 최대치이다. 이 숫자를 넘으면 다음 칸으로 아이템이 밀린다.
// 3. item 은 같은 Grid중에 구별하기 위한 일종의 속성이다.
// 4. sm 은 break point로 이것이 sm은 600px 이상일 경우 넣어준 column값만큼 width를 차지한다.
// 구체적인 수치는 아래와 같다
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
