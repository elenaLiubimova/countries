import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Main from './components/Main';
import CurrentCountry from './pages/CurrentCountry';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, useTheme, useThemeProps } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const mode = useSelector((state) => state.theme);
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CurrentCountry />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </div>
  );
}

export default App;
