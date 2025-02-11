import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#FFD2A4',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function Example({heading1,heading2,texts,hov}) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={[
          {
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: {
            sm : 50,
            md: 300,
          },
        
        },
          hov && {
            '&:hover': {
              bgcolor : 'action.active',
              
  
              
            }
  

          },
          
        ]}
      >
        <Box sx={{ color: 'text.primary', fontSize: {
          sm : 24,
          md : 34
        }, fontWeight: 'medium' }}>
          {heading1}
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'block',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: {
              xs:15,
              sm:24
            },
            
          }}
        >
          {heading2}
        </Box>

        <Box sx={{ color: 'text.secondary',display:'inline',fontSize:{
          xs:12,
          sm:15
        } }}>
        {texts}</Box>

      </Box>
    </ThemeProvider>
  );
}
