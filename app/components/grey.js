import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Backimage from './backimage';

const theme = createTheme({
  palette: {
    background: {
      paper: '#F5F2F0',
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

export default function Reason({heading1,heading2,children}) {
  return (
    <ThemeProvider theme={theme}>
      <Box component='div' className='w-full'
        sx={[{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          
        }]}
      >
        <Box component='div' className='text-center' sx={{ color: 'text.primary', fontSize: {
          sm : 20,
          md : 34
        }, fontWeight: 'medium' }}>
          {heading1}
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 24,
            
          }}
        >
          {heading2}
        </Box>

        <Box sx={{ color: 'text.secondary' }}>
        {
          children
        }
        
        
        </Box>

      </Box>
    </ThemeProvider>
  );
}
