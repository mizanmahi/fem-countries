import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Box } from '@mui/system';
import React from 'react';

const useStyle = makeStyles({
   inputStyles: {
      width: '25ch',
      background: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)',
      '&::placeholder': {
         color: 'hsl(0, 0%, 100%)',
      },
   },
});

const FilterSelect = () => {
   const classes = useStyle();
   return (
      <Box sx={{ minWidth: 120, m: 2 }}>
         <FormControl fullWidth variant='filled'>
            <InputLabel id='demo-simple-select-label' color='warning'>
               Filter By Region
            </InputLabel>
            <Select
               placeholder='Filter'
               labelId='demo-simple-select-label'
               id='demo-simple-select'
               label='Age'
               className={classes.inputStyles}
               color='warning'
               value='10'
            >
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
};

export default FilterSelect;
