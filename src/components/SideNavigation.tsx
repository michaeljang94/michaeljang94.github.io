import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

import { useNavigate } from 'react-router';
import type { Dispatch, SetStateAction } from 'react';

export const SIDE_NAVIGATION_WIDTH = 250;

export interface SideNavigationProps {
  setHeader: Dispatch<SetStateAction<string>>;
  open: boolean;
  onClose: () => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({ setHeader, open, onClose }) => {
  const navigate = useNavigate();

  const DrawerList = (
    <>
      <List>
        <Toolbar>
          <Typography
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            michaeljang94
          </Typography>
        </Toolbar>
        <Divider />
        <ListItem key={'Home'} disablePadding>
          <ListItemButton
            onClick={() => {
              setHeader('Home');
              navigate('/');
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Projects'} disablePadding>
          <ListItemButton
            onClick={() => {
              setHeader('Projects');
              navigate('/projects');
            }}
          >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={'Projects'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={'Contact'} disablePadding>
          <ListItemButton
            onClick={() => {
              setHeader('Contacts');
              navigate('/contact');
            }}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  return (
    <>
      <Drawer open={open} onClose={onClose} anchor="left">
        {DrawerList}
      </Drawer>
    </>
  );
};
