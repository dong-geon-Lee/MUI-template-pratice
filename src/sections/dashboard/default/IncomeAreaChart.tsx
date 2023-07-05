import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

interface Props {
  slot: string;
}

const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

const IncomeAreaChart = ({ slot }: Props) => {
  const theme = useTheme();
  // const {mode } = useConfig()
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState<ChartProps>(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary.dark],
      xaxis: {
        categories:
          slot === 'month'
            ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      }
      // tooltip: {
      //   theme: mode === 'dark' ? 'dark' : 'light'
      // }
    }));
  }, [primary, secondary, theme, slot]);

  return <div>IncomeAreaChart</div>;
};

export default IncomeAreaChart;

// theme.palette.primary 에서 추가로 설정하려면 .light .main .dark로 되어잇습니다.
// 별도의 숫자를 쓰려고하면 타입에러가 발생합니다. 공식문서에서는 primary[700] 같은 패턴은 보이지 않음
