'use client'
import * as React from 'react';
import Example from '../components/paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Backimage from '../components/backimage';
import { useRouter } from 'next/navigation';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Copyright from '../components/copyright';

const drawerWidth = 240;
const navItems = ['/', 'about', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
   const router = useRouter()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
const[loading,setloading]= React.useState(false)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EMMANUEL
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText onClick={()=>{router.push(item)}} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
if(loading){

    
      return (

           <Container>
            <CssBaseline />
            <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>

           </Container>

      );


}
  return (
    <Box sx={{ display: 'flex' }}>
      
      <AppBar className='bg-purple ' component="nav" color='transparent'>
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
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={()=>{
                   setloading(true)   
                   router.push(item)
              }} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
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
      <Box component="main" sx={{ p: 3,
       

       }}>
        <Toolbar />
        <Container className='justify-items-center'>
            
        <div className='grid grid-cols-3 gap-2 w-full'>
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

  <Backimage containerStyles='col-span-2 mx-2 bg-enroll h-auto'>
  </Backimage>
</div>
<Example
heading1='about us' heading2='brief history' texts='
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
' 
></Example>

<Copyright />


        </Container>
      </Box>
    </Box>
  );
}



export default DrawerAppBar;
