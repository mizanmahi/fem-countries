import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import FilterSelect from '../FilterSelect/FilterSelect';
import SearchInput from '../SearhInput/SearchInput';

import { Grid } from '@mui/material';
import Country from '../Country/Country';

const Home = () => {
   const [countries, setCountries] = useState([]);
   const [displayCountries, setDisplayCountries] = useState([]);
   // const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      let cancelToken = axios.CancelToken.source('CancelToken');

      axios
         .get('https://restcountries.com/v3.1/all', {
            cancelToken: cancelToken.token,
         })
         .then((res) => {
            console.log(res);
            setCountries(res.data);
            setDisplayCountries(res.data);
         })
         .catch((err) => {
            console.log(err);
         });

      return () => {
         if (cancelToken) {
            cancelToken.cancel('Cancelling the country request');
         }
      };
   }, []);

   const handleChange = (e) => {
      // setSearchTerm(e.target.value);
      const matchedCountries = countries.filter((country) => {
         return country.name.common.toLowerCase().includes(e.target.value);
      });
      setDisplayCountries(matchedCountries);
   };

   return (
      <Grid container sx={{ background: 'hsl(207, 26%, 17%)', pt: 4 }}>
         <Grid item container sx={{ justifyContent: 'space-between', pb: 4 }}>
            <Grid item sm={1}></Grid>
            <Grid item sm={7}>
               <SearchInput handleChange={handleChange} />
            </Grid>
            <Grid item sm={3}>
               {/* <FilterSelect /> */}
            </Grid>
            <Grid item sm={1}></Grid>
         </Grid>
         <Grid item container>
            <Grid item sm={1}></Grid>
            <Grid
               item
               container
               sm={10}
               sx={{ justifyContent: 'center' }}
               spacing={5}
            >
               {displayCountries?.map((country) => (
                  <Country key={country.name.common} country={country} />
               ))}
            </Grid>
            <Grid item sm={1}></Grid>
         </Grid>
      </Grid>
   );
};

export default Home;
