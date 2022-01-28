//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signin from './components/signin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BagPage from './components/bagPage';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: '#fff',
          border: '5px solid transparent',
          borderRadius: '5px',
          fontWeight: 600,
          fontSize: '16px',
          width:'300px',
          height: '50px',
          marginTop: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 15px',
          display: 'block',
          backgroundColor: '#302a42',
          textTransform: 'none'           
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#302a42',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>  
            <Route path="signin" element={<Signin />}/>
            <Route path="bag" element={ <BagPage/>}/> 
           </Routes>
        </BrowserRouter>
       
      </ThemeProvider>
    </div>
  );
}

export default App;
