import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
            </Toolbar>
         </AppBar>
      </Box>
   );
}
