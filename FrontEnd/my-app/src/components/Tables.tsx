import {
  Chip,
  colors,
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

type Vulnerability = {
  type: string;
  severity: string;
  endpoint: string;
  statusCode: number;
  impact: string;
};

const rows: Vulnerability[] = [
  {
    type: "SQL Injection",
    severity: "Critical",
    endpoint: "/api/users",
    statusCode: 500,
    impact: "Database exposure"
  },
  {
    type: "XSS",
    severity: "High",
    endpoint: "/search",
    statusCode: 200,
    impact: "Session hijacking"
  },
  {
    type: "Open Redirect",
    severity: "Medium",
    endpoint: "/redirect",
    statusCode: 302,
    impact: "Phishing attacks"
  },
  {
    type: "Missing Headers",
    severity: "Low",
    endpoint: "/login",
    statusCode: 200,
    impact: "Security misconfiguration"
  }
];



export default function VulnerabilityTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "Critical":
            return  colors.Severity.Critical
            case "High":
            return colors.Severity.High // orange
            case "Medium":
            return colors.Severity.Medium // yellow
            case "Low":
            return colors.Severity.Low // blue
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
      <Table sx={{minWidth: 700}}>
        <TableHead>
          <TableRow >
            <TableCell><Typography fontWeight={700}>Type</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Severity</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Endpoint</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Status Code</Typography></TableCell>
            <TableCell><Typography fontWeight={700}>Impact</Typography></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover sx={{
            height: "70px !important",
          }}>
              <TableCell>{row.type}</TableCell>
                <TableCell>
                <Chip
                    label={row.severity}
                    sx={{
                    backgroundColor: getSeverityColor(row.severity),
                    color: row.severity === "Medium" ? "black" : "white",
                    fontWeight: 600,
                    width: '100px',
                    borderRadius: 2
                    }}
                    size="small"
                />
                </TableCell>
              <TableCell>{row.endpoint}</TableCell>
              <TableCell>{row.statusCode}</TableCell>
              <TableCell>{row.impact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}