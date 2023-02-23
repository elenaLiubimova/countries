import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { DarkModeOutlined } from '@mui/icons-material';

const Header = () => {
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
        <Button variant="text" startIcon={<DarkModeOutlined />} size="small">
          Dark mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
