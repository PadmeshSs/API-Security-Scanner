import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '../Themes';

export function Card({ children, ...props }: any) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box
      bgcolor={colors.box[500]}
      borderRadius="8px"
      p={2}
      display={'grid'}
      {...props}
    >
      {children}
    </Box>
  );
}