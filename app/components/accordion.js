'use client'
import React, { useActionState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';


import { Button } from '@mui/material';

import Box from '@mui/material/Box';


//import React from 'react'

export default function Accordions({children}){
  return (
    <Accordion>
    <AccordionSummary
      
      aria-controls="panel2-content"
      id="panel2-header"
      /*onClick={()=>{
    //      check('usher')
    
      }}*/
      
    >
      <Typography sx={{
        //justifyContent: 'center'
      }}> <Brightness4RoundedIcon sx={{
             pl:0.7
    }}/>
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {children}
    
    
        </Typography>
    </AccordionDetails>
    </Accordion>
      )
}




