import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
   palette: {
      primary: {
         main: 'hsl(209, 23%, 22%)',
      },
      secondary: {
         main: 'hsl(207, 26%, 17%)',
      },
      info: {
         main: 'hsl(200, 15%, 8%)',
      },
      success: {
         main: 'hsl(0, 0%, 52%)',
      },
      grey: {
         main: 'hsl(0, 0%, 98%)',
      },
      warning: {
         main: 'hsl(0, 0%, 100%)',
      },
   },
   typography: {
      fontFamily: 'Nunito Sans, sans-serif',
   },
   components: {
      MuiInputLabel: {
         styleOverrides: {
            root: {
               color: 'hsl(0, 0%, 100%) !important',
            },
         },
      },
   },
});
