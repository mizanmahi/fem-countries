import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position='static'>
            <Toolbar>
               <Typography
                  variant='h6'
                  component='div'
                  sx={{ flexGrow: 1, fontWeight: '800' }}
               >
                  Where In The World?
               </Typography>
               <Typography color='inherit' fontWeight='600'>
                  Dark Mode
               </Typography>

               <Typography
                  component={Link}
                  to='/'
                  color='inherit'
                  fontWeight='600'
                  sx={{
                     ml: 2,
                     background: 'hsl(207, 26%, 17%)',
                     py: 1,
                     px: 1.5,
                     borderRadius: 1,
                  }}
               >
                  Countries
               </Typography>
               <Typography
                  component={Link}
                  to='/another-page'
                  color='inherit'
                  fontWeight='600'
                  sx={{
                     ml: 2,
                     background: 'hsl(207, 26%, 17%)',
                     py: 1,
                     px: 1.5,
                     borderRadius: 1,
                  }}
               >
                  Another Page
               </Typography>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
