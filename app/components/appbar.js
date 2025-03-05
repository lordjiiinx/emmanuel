'use client'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';
//import {  ThemeProvider, createTheme } from '@mui/system';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import Example from './components/paper';
//import Reason from './components/grey';
//import Backimage from './components/backimage';
//import Copyright from './components/copyright';
import { useRouter } from 'next/navigation';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function HideAppBar(props) {
  const { children, window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = ['/', 'about', 'Contact'];
  const drawerWidth = 240;
  const [loading,setloading] = React.useState(false)
 const handleDrawerToggle = () => {
   setMobileOpen((prevState) => !prevState);
 };

 


 const drawer = (
   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <Typography variant="h6" sx={{ my: 2 }}>
       EMMANUEL
     </Typography>
     <Divider />
     <List>
       {navItems.map((item) => (
         <ListItem key={item} disablePadding>
           <ListItemButton sx={{ textAlign: 'center',mx:2 }}>
             <ListItemText onClick={()=>{router.push(item)}} primary={item} />
           </ListItemButton>
         </ListItem>
       ))}
     </List>
   </Box>
 );

 const container = window !== undefined ? () => window().document.body : undefined;


  const router = useRouter()


  return (
    <React.Fragment>
      
      
      <HideOnScroll {...props}>

        <AppBar className='bg-purple justify-items-center ' color='transparent'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            EMMANUEL
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>

            {navItems.map((item) => (
              <Box  onClick={()=>{
                   setloading(true)
                   router.push(item)
                   
              }} key={item} sx={{  mx:2}}>
                {item}
              </Box>
            ))}
          </Box>
        </Toolbar>
        </AppBar>
        
      </HideOnScroll>
      <Toolbar />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Container className='justify-items-center ' sx={{mt:6 }}>

        {children}
</Container>
      
    </React.Fragment>
  );
}
