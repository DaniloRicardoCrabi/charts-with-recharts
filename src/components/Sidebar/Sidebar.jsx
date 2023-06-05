import React from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
}));

const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Page 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Page 2" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
