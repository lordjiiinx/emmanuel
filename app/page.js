'use client'
import Image from 'next/image';
import ima from '../public/reason.jpeg'

import * as React from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import Example from './components/paper';
import HideAppBar from './components/appbar';
import { Typography } from '@mui/material';
import Copyright from './components/copyright';
import Accordions from './components/accordion';


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
        <Box component='div' className='w-full '
        sx={{
          justifyContent:'center'
        }}
        >
<Accordions>
<FormControl>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <Box component='div' className='xs:block sm:grid grid-cols-3'>
          <FormControlLabel className='' value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            
          </Box>
        </RadioGroup>
      </FormControl>

</Accordions>


        </Box>

        <Example heading1='WELCOME! EMMANUEL SCHOOL' heading2='Welcome note:'  texts='
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
'>

  </Example>

        

      <Box component='div' className='sm:block w-full md:grid grid-cols-3
      
      ' >
  <Example heading1='why join us' heading2='A brief introduction:'  texts='
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
  <Box component='div' className='md:col-span-2 ' 
  
  >

  <Image src={ima} alt='hello'  className='md:h-full md:w-full'></Image>

  </Box>





</Box>

<Copyright />
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





