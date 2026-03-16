import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material';
import { tokens } from '../Themes';





export default function DonutChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const data = [
    { label: 'Critical', value: 1, color: `${colors.Severity.Critical}` },
    { label: 'High', value: 1, color: `${colors.Severity.High}` },
    { label: 'Medium', value: 2, color: `${colors.Severity.Medium}` },
    { label: 'Low', value: 1, color: `${colors.Severity.Low}` },
  ];

    const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };
    return (
      <Box display={'flex'}>
            <PieChart
          series={[{ innerRadius: 50, outerRadius: 100, data}]}
          {...settings}
        />  
      </Box>

    );
}
