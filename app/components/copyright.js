
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

function Copyright() {
    return (
      <Box component='div'  sx={{
        height:150,
        paddingTop: {
          sm: 3,
          md:7,
        }
      }} className='bg-grey my-0 rounded-lg font-sains w-full'>
      <Typography variant="body2" className='py-3' color="primary" align="center" justifyContent='center' sx={{
        mb: 2
      }} >
        {'Copyright © '}
        <Link color="primary" href="#">
          <div className='text-center'>
          Waithaka, Nairobi, Kenya. Phone Number: +254 714774503. Email: kagwaithakamission@gmail.com
Copyright © 2024 KAG Waithaka Mission Center

          </div>
          {' '}
          {new Date().getFullYear()}
        {'.'}

      
        </Link>
      </Typography>
      </Box>
    );
  }


  export default Copyright