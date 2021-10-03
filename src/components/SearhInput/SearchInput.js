import React from 'react';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
   inputStyles: {
      background: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)',
   },
});

const SearchInput = ({handleChange}) => {
   const classes = useStyle();

   return (
      <FormControl sx={{ m: 2, width: '45ch' }} variant='outlined'>
         <OutlinedInput
            fullWidth
            id='outlined-adornment-weight'
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={
               <InputAdornment position='start'>
                  <SearchIcon color='warning' />
               </InputAdornment>
            }
            onChange={handleChange}
            aria-describedby='outlined-weight-helper-text'
            inputProps={{
               'aria-label': 'weight',
            }}
            placeholder='Search for a country...'
            className={classes.inputStyles}
         />
      </FormControl>
   );
};

export default SearchInput;
