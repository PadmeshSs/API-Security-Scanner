import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Chart from "../../components/Chart";
import StatCard from "../../components/Statcard"
import APIConfig from "../../components/APIConfig";
import Findings from "../../components/Findings";



export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    type Stat = {
        title: string,
        value: string | number,
        icon: number,
        bg?: string
    }
    const stats: Stat[] = [
        { title: "Total Issues", value: 4, icon: 1},
        { title: "Critical", value: 1, icon: 2, bg: `${colors.Severity.Critical}`},
        { title: "High", value: 1, icon: 3, bg: `${colors.Severity.High}` },
        { title: "Medium", value: 2, icon: 4, bg: `${colors.Severity.Medium}`},
    ]


  return (
        <Box p="20px" display="flex" flexDirection="column" flex={1}>
        <Box
            display="grid"
            gridTemplateColumns={{
            xs: "repeat(4, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(8, 1fr)",
            lg : "repeat(12, 1fr)",
            }}
            gridTemplateRows={{
            xs: 'minmax(0, 100px) minmax(0, 100px) minmax(200px, 250px) auto auto',
            sm: '100px auto',
            md: '120px auto',
            lg: '120px auto',
            }}
            gap="20px"
            flex={1}
        >
            {
                stats.map((item)=>(
                    <StatCard title={item.title} value={item.value} icon={item.icon} bg={item.bg}></StatCard>
                ))
            }


            {/* API CONFIGURATION */}
            <APIConfig/>

            {/* donut chart */}
            <Chart/>


            {/* vulnerability findings */}
            <Findings/>
        </Box>
    </Box>
  );
}