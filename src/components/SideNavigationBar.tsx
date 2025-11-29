import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  ClickAwayListener,
} from '@mui/material';
import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Facebook } from '@mui/icons-material';

export const SideNavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={'Contact'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            setIsOpen(true);
          }}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            isOpen && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={(event, reason) => {
          if (reason === 'backdropClick') {
            setIsOpen(false);
          }
        }}
      >
        <IconButton
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Typography>Navigation</Typography>
          <ChevronLeftIcon />
        </IconButton>
        {DrawerList}
      </Drawer>
    </div>
  );
};
