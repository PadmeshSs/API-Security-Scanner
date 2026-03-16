import { Card } from "./Card"
import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material';
import { tokens } from '../Themes';


interface StatCardProps {
  title: string
  value: string | number
  icon: number,
  bg?: string
}

export default function StatCard ({ title, value, icon, bg }: StatCardProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
            <Card gridColumn={{xs: "span 2", sm: "span 1", md: "span 2", lg: "span 3"}}>
                <Box display={"flex"} flexDirection={'column'} gap={2} gridColumn={'1 / 2'} gridRow={'1 / 2'} zIndex={'1'}>
                    <Box display="flex">
                    <Typography
                    sx={{
                        fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 700,
                        color: colors.text[500]
                    }}
                    >
                    {title}
                    </Typography>
                    </Box>
                    <Typography variant="h3" color={colors.text[500]} fontWeight="bold">
                        {value}
                    </Typography>
                </Box>
                 <Box sx={{
                            display: title === "Total Issues"
                            ? { xs: "none", Tablet: "grid" }   // hide only on xs
                            : "grid"
                 }} display={'grid'} borderRadius={1} bgcolor={bg} gridColumn={'1 / 2'} gridRow={'1 /  2'} width={'25px'} height={'25px'} justifySelf={'end'} justifyItems={'center'} alignItems={'center'} zIndex={1} border={bg ? `1px solid ${bg}` : `1px solid ${colors.text[500]}`} color={bg ? 'white' : `${colors.text[500]}`}>
                    {icon}
                </Box>
            </Card>
  )
}