import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useTheme } from '@mui/material';
import { tokens } from '../Themes';

// Match the structure of your JSON 'findings' array
type Vulnerability = {
  type: string;
  severity: string;
  endpoint: string;
  status: number; // Changed from statusCode to match JSON
  impact: string;
};

type TableProps = {
  rows: Vulnerability[];
};

export default function VulnerabilityTable({ rows }: TableProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getSeverityColor = (severity: string) => {
    // .toUpperCase() ensures it matches "CRITICAL" from your JSON
    switch (severity.toUpperCase()) {
      case "CRITICAL":
        return colors.Severity.Critical;
      case "HIGH":
        return colors.Severity.High;
      case "MEDIUM":
        return colors.Severity.Medium;
      case "LOW":
        return colors.Severity.Low;
      default:
        return "#9e9e9e";
    }
  };

  return (
    <TableContainer sx={{
      backgroundColor: colors.box[500],
      borderRadius: 2,
      boxShadow: "0px 4px 12px rgba(0,0,0,0.35)",
      border: `1px solid ${colors.box[600]}`,
    }}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell><Typography fontWeight={700}>Type</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Severity</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Endpoint</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Status Code</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Impact</Typography></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="body2" sx={{ py: 2 }}>No vulnerabilities found.</Typography>
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, index) => (
              <TableRow key={index} hover sx={{ height: "70px !important" }}>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <Chip
                    label={row.severity}
                    sx={{
                      backgroundColor: getSeverityColor(row.severity),
                      color: row.severity.toUpperCase() === "MEDIUM" ? "black" : "white",
                      fontWeight: 600,
                      width: '100px',
                      borderRadius: 2
                    }}
                    size="small"
                  />
                </TableCell>
                <TableCell>{row.endpoint}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.impact}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}