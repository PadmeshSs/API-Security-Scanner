import { Card } from "../../components/Card"
import { Box, Typography, Divider } from "@mui/material"
import { useTheme } from '@mui/material';
import { tokens } from '../../Themes';
import DonutChart from "../../components/DonutChart";
import type { ScanResponse } from "../Types/Globaltypes";

// Define the props type
type ChartProps = {
    data: ScanResponse | null;
}

export default function Chart({ data }: ChartProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Map the titles to the actual keys in your JSON data
    const stats = [
        { title: "Critical", color: colors.Severity.Critical, value: data?.critical || 0 },
        { title: "High", color: colors.Severity.High, value: data?.high || 0 },
        { title: "Medium", color: colors.Severity.Medium, value: data?.medium || 0 },
        { title: "Low", color: colors.Severity.Low, value: data?.low || 0 }
    ];

    return (
        <Card gridColumn={{ xs: "span 4", sm: "span 2", md: "span 4", lg: "span 6" }}>
            <Box display="flex" flexDirection="column">
                {/* Header */}
                <Box>
                    <Typography variant="h4" fontWeight="medium">
                        Scan Results
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                </Box>

                {/* Chart + Legend */}
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    alignItems="center"
                    justifyContent="space-around"
                    gap={3}
                >
                    {/* Chart - Passing the data down */}
                    <Box>
                        <DonutChart data={data} />
                    </Box>

                    {/* Legend - Showing dynamic values next to titles */}
                    <Box display="flex" flexDirection="column" gap={2}>
                        {stats.map((item, index) => (
                            <Box key={index} display="flex" gap={1} alignItems="center">
                                <Box width={14} height={14} borderRadius={1} bgcolor={item.color} />
                                <Typography variant="body2">
                                    {item.title}: <strong>{item.value}</strong>
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}