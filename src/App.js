import Header from './components/Header/Header';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { darkTheme } from './Theme/Theme';
import Home from './components/Home/Home';

function App() {
   return (
      <div className='App'>
         <ThemeProvider theme={darkTheme}>
            <CssBaseline>
               <Header />
               <Home />
            </CssBaseline>
         </ThemeProvider>
      </div>
   );
}

export default App;
