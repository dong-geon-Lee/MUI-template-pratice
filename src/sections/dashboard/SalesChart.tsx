import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography, useTheme } from '@mui/material';

import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

import { ChangeEvent, useEffect, useState } from 'react';

import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

const initialSeries = [
  {
    name: 'Income',
    data: [180, 90, 135, 114, 120, 145]
  },
  {
    name: 'Cost Of Sales',
    data: [120, 45, 78, 150, 168, 99]
  }
];

const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 430,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val} thousands`;
      }
    }
  },
  legend: {
    show: false
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false
        }
      }
    }
  ]
};

const SalesChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const [options, setOptions] = useState<ChartProps>(columnChartOptions);
  const [series, setSeries] = useState(initialSeries);
  const [legend, setLegend] = useState({
    income: true,
    cos: true
  });

  const { income, cos } = legend;

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const warning = theme.palette.warning.main;
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;

  // * 콘솔 에러로 잠시 주석처리함. themes 폴더에 ThemeProvider 처리 해야된다. 아직은 상관없어보임
  // const xsDown = useMediaQuery(() => theme.breakpoints.down('sm'));

  const handleLegendChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLegend({ ...legend, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    if (income && cos) {
      setSeries(initialSeries);
    } else if (income) {
      setSeries([
        {
          name: 'Income',
          data: [180, 90, 135, 114, 120, 145]
        }
      ]);
    } else if (cos) {
      setSeries([
        {
          name: 'Cost Of Sales',
          data: [120, 45, 78, 150, 168, 99]
        }
      ]);
    } else {
      setSeries([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [income, cos]);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: !(income && cos) && cos ? [primaryMain] : [warning, primaryMain],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
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
      },
      tooltip: {
        theme: mode === 'dark' ? 'dark' : 'light'
      },
      plotOptions: {
        bar: {
          // columnWidth: xsDown ? '60%' : '30%'
        }
      }
    }));
  }, [mode, primary, secondary, line, warning, primaryMain, successDark, income, cos]);

  return (
    <MainCard sx={{ mt: 1 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack spacing={1.5}>
            <Typography variant="h6" color="secondary">
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="warning" checked={income} onChange={handleLegendChange} name="income" />}
                label="Income"
              />
              <FormControlLabel control={<Checkbox checked={cos} onChange={handleLegendChange} name="cos" />} label="Cost of Sales" />
            </FormGroup>
          </FormControl>
        </Stack>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="bar" height={360} />
        </div>
      </Box>
    </MainCard>
  );
};

export default SalesChart;
