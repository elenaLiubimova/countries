import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { DarkModeOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/theme/themeActions';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography
          variant="h6"
          align="left"
          component="h1"
          sx={{ flexGrow: 1 }}
        >
          Where in the world?
        </Typography>
        <Button
          onClick={toggleTheme}
          variant="text"
          startIcon={<DarkModeOutlined />}
          size="small"
        >
          {theme} mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
