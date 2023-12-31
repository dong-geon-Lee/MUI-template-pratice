import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';
import useConfig from '../../../hooks/useConfig';

const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false
  }
};

const MonthlyBarChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series] = useState([{ data: [80, 95, 70, 42, 65, 55, 78] }]);
  const [options, setOptions] = useState<ChartProps>(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      color: [info],
      xaxis: {
        labels: {
          styles: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      tooltip: {
        theme: mode === 'dark' ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, info, secondary]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={325} />
    </div>
  );
};

export default MonthlyBarChart;

// useState 중 업데이트 함수 안쓰면 아예 비워버리는구나!
