import { Card } from "../../components/Card"
import { Box, Divider, Typography } from "@mui/material"
import VulnerabilityTable from "../../components/Tables";
import type { ScanResponse } from "../Types/Globaltypes";

type findingsProps = {
    data: ScanResponse | null
}

export default function Findings({ data }: findingsProps) {
  return (
    <Card gridColumn={{ xs: "span 4", sm: "span 4", md: "span 8", lg: "span 12" }}>
      <Box display={'flex'} flexDirection={'column'} sx={{ overflowX: "Auto" }}>
        <Box>
          <Typography variant="h4" fontWeight={'medium'}>
            Vulnerability Findings
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>
        <Box>
          {/* Pass the findings array or an empty array if data is null */}
          <VulnerabilityTable rows={data?.findings || []} />
        </Box>
      </Box>
    </Card>
  )
}