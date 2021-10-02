import {
   FormControl,
   Grid,
   InputAdornment,
   InputLabel,
   MenuItem,
   OutlinedInput,
   Select,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';

const useStyle = makeStyles({
   inputStyles: {
      background: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)',
      ':placeholder': {
         color: 'hsl(0, 0%, 100%)',
      },
   },
});

const Home = () => {
   const classes = useStyle();
   return (
      <Grid container sx={{ background: 'hsl(207, 26%, 17%)' }}>
         <Grid item container sx={{justifyContent: 'space-around'}}>
            <Grid item sm={1}></Grid>
            <Grid item sm={4}>
               <FormControl sx={{ m: 2, width: '25ch' }} variant='outlined'>
                  <OutlinedInput
                     id='outlined-adornment-weight'
                     // value={values.weight}
                     // onChange={handleChange('weight')}
                     startAdornment={
                        <InputAdornment position='start'>
                           <SearchIcon color='warning' />
                        </InputAdornment>
                     }
                     aria-describedby='outlined-weight-helper-text'
                     inputProps={{
                        'aria-label': 'weight',
                     }}
                     placeholder='Search for a country...'
                     className={classes.inputStyles}
                  />
               </FormControl>
            </Grid>
            <Grid item sm={2}>
               <Box sx={{ minWidth: 120, m: 2 }}>
                  <FormControl fullWidth>
                     <InputLabel id='demo-simple-select-label' color='warning'>Filter By Region</InputLabel>
                     <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        label='Age'
                        className={classes.inputStyles}
                     >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                     </Select>
                  </FormControl>
               </Box>
            </Grid>
            <Grid item sm={1}></Grid>
         </Grid>
         <Grid item container>
            country list
         </Grid>
      </Grid>
   );
};

export default Home;
