import { Card } from "./Card"
import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material';
import { tokens } from '../Themes';
import {Divider} from "@mui/material";
import DonutChart from "./DonutChart";

type Stat = {
    title: string,
    color: string
}

export default function Chart () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const stats: Stat[] = [
        { title: "Critical", color: `${colors.Severity.Critical}`},
        { title: "High", color: `${colors.Severity.High}` },
        { title: "Medium", color: `${colors.Severity.Medium}`},
        { title: "Low", color: `${colors.Severity.Low}`}
    ]

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
                    {/* Chart */}
                    <Box>
                        <DonutChart />
                    </Box>

                    {/* Legend */}
                    <Box display="flex" flexDirection="column" gap={2}>
                        {stats.map((item, index) => (
                        <Box key={index} display="flex" gap={1} alignItems="center">
                            <Box width={14} height={14} borderRadius={1} bgcolor={item.color} />
                            <Typography>{item.title}</Typography>
                        </Box>
                        ))}
                    </Box>

                    </Box>

                </Box>
            </Card>
  )
}