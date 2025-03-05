'use client'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

import * as React from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import Example from '../components/paper';
import HideAppBar from '../components/appbar';
import { Typography } from '@mui/material';


function MyApp() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
          <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <HideAppBar >
        <Box component='div' className=''>
        <FormControl>
        <FormLabel id="demo-theme-toggle">          <Box sx={{
            mr:0
          }} onClick={()=>{
                   // dar?setdar(false):setdar(true)
                    
                  }}><Brightness4RoundedIcon/></Box>
</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <Typography>
          <FormControlLabel className='' value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            
          </Typography>
        </RadioGroup>
      </FormControl>


        </Box>

      <Box component='div' className='sm:block w-full md:grid grid-cols-3 gap-2' >
  <Example heading1='why join us' heading2='reasons'  texts='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
' hov={true}>

  </Example>

  <Box component='div' className='bg-reason md:col-span-2' sx={{
    height:719

  }}></Box>
</Box>


</HideAppBar>
    </Box>





  );
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  );
}





