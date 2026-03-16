import { Card } from "../../components/Card"
import { Box, Divider, Typography } from "@mui/material"
import VulnerabilityTable from "../../components/Tables";


export default function Findings () {
  return (
            <Card gridColumn={{xs: "span 4", sm: "span 4", md: "span 8", lg: "span 12"}}>
                <Box display={'flex'} flexDirection={'column'} sx={{overflowX: "Auto"}}>
                    <Box>
                        <Typography variant="h4" fontWeight={'medium'}>
                            Vulnerability Findings
                        </Typography> 
                        <Divider sx={{ my: 2}}/>                       
                    </Box>
                    <Box >
                        <VulnerabilityTable/>
                    </Box>
                </Box>
            </Card>
  )
}