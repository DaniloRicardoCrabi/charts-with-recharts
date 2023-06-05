import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
}));

const StyledLogo = styled('img')(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Navbar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
    
        <StyledLogo src="/caminho/do/seu/logotipo.png" alt="Logo" />

        <Typography variant="h6" component="div">
          Meu Site
        </Typography>

      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
