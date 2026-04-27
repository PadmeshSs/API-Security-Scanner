import { Box, Typography, Divider, Input, IconButton, Button } from "@mui/material";
import { Card } from '../../components/Card';
import CustomizedMenus from '../../components/Menu';
import { SearchOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import type { headerType } from "../Types/Globaltypes";

// 1. Define the Props Interface
type APIconfigprops = {
  loading: boolean;
  startscan: () => void;
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  method: "GET" | "POST";
  setMethod: Dispatch<SetStateAction<"GET" | "POST">>;
  setHeaders: Dispatch<SetStateAction<Record<string, string>>>;
  error: string;
};

export default function APIConfig({ 
  loading, 
  startscan, 
  url, 
  setUrl, 
  method, 
  setMethod, 
  setHeaders, 
  error 
}: APIconfigprops) {
  // Local state for the UI list (manages the dynamic rows)
  const [headerList, setHeaderList] = useState<headerType[]>([]);

  // 2. Sync local list to the Parent's Record object
  useEffect(() => {
    const formattedHeaders = headerList.reduce((acc, curr) => {
      if (curr.key.trim()) acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);
    
    setHeaders(formattedHeaders);
  }, [headerList, setHeaders]);

  const handleMethodChange = (m: 'GET' | 'POST') => {
    setMethod(m);
  };

  const addHeader = (k: string) => {
    const hasattr = headerList.some(head => head.key === k);
    if (!hasattr) {
      setHeaderList(prev => [...prev, { key: k, value: "" }]);
    }
  };

  const updateHeaderValue = (index: number, val: string) => {
    const updated = [...headerList];
    updated[index].value = val;
    setHeaderList(updated);
  };

  const deleteHeader = (index: number) => {
    setHeaderList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card 
      gridColumn={{ xs: "span 4", sm: "span 2", md: "span 4", lg: "span 6" }} 
      sx={{ 
        overflowX: "scroll",
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Box display="flex" flexDirection="column" height="100%" gap={1}>
        <Box>
          <Typography variant="h4" fontWeight="medium">API Configuration</Typography>
          <Divider sx={{ borderBottomWidth: 2, my: 1 }} />
        </Box>

        {/* Endpoint */}
        <Box display="flex" width="100%" my={1} gap={1}>
          <Box display="flex" flexGrow={1} alignItems="center">
            <Input
              fullWidth
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your API Endpoint..."
              disableUnderline
              sx={{ border: "1px solid #ccc", borderRadius: "5px", px: 1, height: "40px" }}
            />
            <IconButton onClick={startscan} disabled={loading}>
              <SearchOutlined color={loading ? "disabled" : "inherit"} />
            </IconButton>
          </Box>

          <CustomizedMenus
            role="dropdown"
            // Display current method as label if your menu component supports it
            items={[
              { label: 'GET', onclick: () => handleMethodChange('GET') },
              { label: 'POST', onclick: () => handleMethodChange('POST') },
            ]}
          />
        </Box>

        {/* Headers Section */}
        <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
          <Typography variant="h6">Headers ({method})</Typography>
          <Box
            mt={1}
            sx={{
              overflowY: "auto",
              maxHeight: "220px",
              minHeight: "100px",
              p: 1,
              borderRadius: 2
            }}
          >
            {headerList.length === 0 ? (
              <Typography variant="body2" color="text.secondary" textAlign="center" mt={2}>
                No headers added.
              </Typography>
            ) : (
              <Box display="flex" flexDirection="column" gap={1.5}>
                {headerList.map((item, index) => (
                  <Box key={item.key} display="flex" alignItems="center" gap={1}>
                    <Input
                      readOnly
                      value={item.key}
                      disableUnderline
                      sx={{ flex: 2, border: "1px solid #ddd", borderRadius: "4px", px: 1, }}
                    />
                    <Input
                      placeholder="Value"
                      value={item.value}
                      onChange={(e) => updateHeaderValue(index, e.target.value)}
                      disableUnderline
                      sx={{ flex: 2, border: "1px solid #ddd", borderRadius: "4px", px: 1 }}
                    />
                    <IconButton onClick={() => deleteHeader(index)} size="small">
                      <DeleteIcon color="error" fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        <Box display="flex" width="100%" gap={2} mt={2}>
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            onClick={startscan}
            disabled={loading || !url}
          >
            {loading ? "Scanning..." : "Start Scan"}
          </Button>

          <CustomizedMenus
            role="selection"
            items={[
              { label: "Authorization", onclick: () => addHeader("Authorization") },
              { label: "X-API-Key", onclick: () => addHeader("X-API-Key") },
              { label: "Content-Type", onclick: () => addHeader("Content-Type") },
              { label: "Accept", onclick: () => addHeader("Accept") }
            ]}
          />
        </Box>
        
        {error && <Typography color="error" variant="caption">{error}</Typography>}
      </Box>
    </Card>
  );
}