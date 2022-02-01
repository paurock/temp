//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BagPage from './pages/bagPage';
import Home from "./pages/home";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            fontSize: '20px',
            color: '#302a42',
            lineHeight: 1.55,
            fontWeight: 400,
          },
        },
        {
          props: { variant: 'discount' },
          style: {
            fontSize: '20px',
            color: '#302a42',
            lineHeight: 1.55,
            display: 'block',
          },
        },
        {
          props: { variant: 'price' },
          style: {
            fontSize: '20px',
            lineHeight: 1.55,
            display: 'block',
            color: 'rgb(254, 92, 7)',
            fontWeight: 700,
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: 'JournalSansNew',
          fontSize: '20px',
          lineHeight: '1.55',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          boxShadow: '0px 1px 3px rgb(0 0 0 / 30%)',
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
          fontSize: '16px',
          width: '300px',
          height: '50px',
          marginTop: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 15px',
          display: 'block',
          backgroundColor: '#302a42',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: 'transparent',
          maxHeight: '70px',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          top: '0px',
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
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="bag" element={<BagPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
