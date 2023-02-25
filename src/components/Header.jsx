import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { DarkModeOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/theme/themeActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { clearControls } from '../redux/controls/controlsActions';

const Title = styled(Link).attrs({
  to: '/',
})`
  text-decoration: none;
  flex-grow: 1;

  :visited {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const onClearControls = () => {
    dispatch(clearControls());
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Title onClick={onClearControls}>
          <Typography variant="h6" align="left" component="h1">
            Where in the world?
          </Typography>
        </Title>
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
