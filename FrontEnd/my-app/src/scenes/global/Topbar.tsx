import {Box, IconButton, useTheme, Typography} from '@mui/material';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../Themes";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarContext } from '../../Themes';



export default function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { toggleSidebar, isBroken } = useContext(SidebarContext);


    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" p={3}>
            {isBroken &&     
                <Box>
                    <IconButton onClick={toggleSidebar} sx={{
                        color: theme.palette.primary.main}}>
                            <MenuIcon />
                    </IconButton>
                </Box>}
            <Box sx={{
                color: theme.palette.primary.main, 
            }}>
                <Typography variant="h4" color={colors.text[500]} fontWeight="bold">
                    Scan Dashboard
                </Typography>
                
            </Box>
            <Box className="icons">
                <IconButton onClick={colorMode.toggleColorMode} sx={{
                    color: theme.palette.primary.main
                }}>
                    {theme.palette.mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
                </IconButton>
            </Box>
        </Box>
    );
}