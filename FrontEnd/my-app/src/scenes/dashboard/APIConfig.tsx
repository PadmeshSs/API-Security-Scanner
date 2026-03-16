import { Box, Typography, Divider, Input, IconButton, Button } from "@mui/material";
import { Card } from '../../components/Card'
import  CustomizedMenus from '../../components/Menu'

import { SearchOutlined } from "@mui/icons-material";

export default function APIConfig(){
    return(
            <Card gridColumn={{xs: "span 4", sm: "span 2", md: "span 4", lg: "span 6"}}>
                <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                    <Box>
                        <Typography variant="h4" fontWeight={'medium'}>
                            API Configuration
                        </Typography>
                        <Divider sx={{
                            borderBottomWidth: 2,
                            my: 1
                        }}/>
                    </Box>
                    <Box display="flex" width="100%" my={2}>
                        <Box display="flex" flexGrow={1} alignItems="center">
                            <Input fullWidth placeholder="Enter your API Endpoint..."/>
                            <IconButton>
                                <SearchOutlined />
                            </IconButton>
                        </Box>
                        <CustomizedMenus role={'dropdown'} items={[{label: 'GET'}, {label: 'POST'},{label: 'PATCH'}, {label: 'DELETE'}, {label: 'PUT'}]} />
                    </Box>
                    <Box display={'flex'} width={'100%'}>
                        <Box display={'flex'} flexDirection={'column'} flex={1}>
                            <Typography variant="h6" fontWeight={'normal'}>
                                Headers
                            </Typography>
                            <Divider sx={{
                                borderBottomWidth: 2,
                                my: 1
                            }}/>                            
                        </Box>
                        <Box display={'flex'}>
                            
                        </Box>
                    </Box>
                    <Box display={'flex'} width="100%" gap={2} mt={'auto'}>
                        <Button variant="contained" sx={{width: '100%'}} color={"secondary"}>Start Scan</Button>
                        <CustomizedMenus role={'selection'} items = {[{label: 'Authorization'}, {label: 'X-API-Key'}, {label: 'Content-Type'}, {label: 'Accept'}, {label: 'Cookie'}, {label: 'User-Agent'}]} />
                    </Box>
                </Box>
            </Card>
    );
}