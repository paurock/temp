//import logo from './logo.svg';
import './App.css';
import Signin from './components/signin';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component
    MuiContainer: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: '#fff',
          border: '5px solid transparent',
          borderRadius: '5px',
          fontWeight: 600,
          fontSize: '18px',
          width: '240px',
          height: '50px',
          marginTop: '15px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 15px',
          display: 'block',
          backgroundColor: '#302a42',
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
        <Signin />
      </ThemeProvider>
    </div>
  );
}

export default App;
