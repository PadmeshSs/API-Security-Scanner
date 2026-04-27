import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material';
import { tokens } from '../Themes';
import type { ScanResponse } from '../scenes/Types/Globaltypes';

type DonutChartProps = {
  data: ScanResponse | null;
};

export default function DonutChart({ data: scanData }: DonutChartProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Substitute hardcoded values with scanData from props
  const data = [
    { label: 'Critical', value: scanData?.critical || 0, color: `${colors.Severity.Critical}` },
    { label: 'High', value: scanData?.high || 0, color: `${colors.Severity.High}` },
    { label: 'Medium', value: scanData?.medium || 0, color: `${colors.Severity.Medium}` },
    { label: 'Low', value: scanData?.low || 0, color: `${colors.Severity.Low}` },
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
        series={[{ innerRadius: 50, outerRadius: 100, data }]}
        {...settings}
      />  
    </Box>
  );
}
