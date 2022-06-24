import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/Theme';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import axios from 'axios';

import './App.css';

// axios.interceptors.response.use(
//    (res) => {
//       console.log('response interceptor ran');
//       return res;
//    },
//    (err) => {
//       console.log('response interceptor error ran');
//       if (err.response.status === 404) {
//          alert('Country not found');
//          return 'unauthorized';
//       }
//       return Promise.reject(err);
//    }
// );

function App() {
   return (
      <div className='App'>
         <ThemeProvider theme={darkTheme}>
            <CssBaseline>
               <BrowserRouter>
                  <Header />
                  <Switch>
                     <Route exact path='/'>
                        <Home />
                     </Route>
                     <Route exact path='/country/:countryName'>
                        <CountryDetails />
                     </Route>
                     <Route exact path='/another-page'>
                        <CountryDetails />
                     </Route>
                  </Switch>
               </BrowserRouter>
            </CssBaseline>
         </ThemeProvider>
      </div>
   );
}

export default App;
