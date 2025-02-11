import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import React from 'react'

function Backimage({width,containerStyles,children,height}) {

  return (
    <Box component='div' sx={{
      height:{
        
        md:height
      },
      width:width,
      display:'inline',
      fontSize:{
        xs:12,
        sm:16
      }
    }} className={`rounded-lg  ${containerStyles}`}>
            {children}
    </Box>

  )
}

export default Backimage
