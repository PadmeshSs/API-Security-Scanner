import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Chart from "./Chart";
import StatCard from "../../components/Statcard"
import APIConfig from "./APIConfig";
import Findings from "./Findings";
import { useState } from "react";
import type { ScanResponse } from "../Types/Globaltypes";
import { Getdata } from "../API/Dataexchange";


type Stat = {

        title: string,

        value: string | number,

        icon: number,

        bg?: string

    }

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // States
    const [data, setData] = useState<ScanResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState<"GET" | "POST">("GET");
    const [headers, setHeaders] = useState<Record<string, string>>({});
    const stats: Stat[] = [
        { 
            title: "Total Issues", 
            value: data?.total ?? 0, 
            icon: 1 
        },
        { 
            title: "Critical", 
            value: data?.critical ?? 0, 
            icon: 2, 
            bg: `${colors.Severity.Critical}` 
        },
        { 
            title: "High", 
            value: data?.high ?? 0, 
            icon: 3, 
            bg: `${colors.Severity.High}` 
        },
        { 
            title: "Medium", 
            value: data?.medium ?? 0, 
            icon: 4, 
            bg: `${colors.Severity.Medium}` 
        },
    ];

    const handleScan = async () => {
        if (!url || loading) return;
        setLoading(true);
        setError("");
        setData(null);
        try {
            const result = await Getdata({ url, method, headers });
            setData(result);
        } catch (err: any) {
            setError("Scan failed. Please check the endpoint.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    console.log(data)
    console.log( url, method, headers )

    return (
        <Box p="20px" display="flex" flexDirection="column" flex={1}>
            <Box
                display="grid"
                gridTemplateColumns={{
                    xs: "repeat(4, 1fr)",
                    sm: "repeat(4, 1fr)",
                    md: "repeat(8, 1fr)",
                    lg: "repeat(12, 1fr)",
                }}
                gap="20px"
            >
                {
                    stats.map((item)=>(
                        <StatCard title={item.title} value={item.value} icon={item.icon} bg={item.bg}></StatCard>
                    ))
                }

                {/* API CONFIGURATION - Passing all props correctly */}
                <APIConfig 
                    startscan={handleScan} 
                    loading={loading} 
                    url={url}
                    setUrl={setUrl}
                    method={method}
                    setMethod={setMethod}
                    setHeaders={setHeaders}
                    error={error}
                />

                <Chart data={data}/>
                <Findings data={data} />
            </Box>
        </Box>
    );
}