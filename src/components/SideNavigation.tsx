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
import GitHubIcon from '@mui/icons-material/GitHub';

import { useLocation, useNavigate } from 'react-router';

export const SIDE_NAVIGATION_WIDTH = 250;

export interface SideNavigationProps {
  open: boolean;
  onClose: () => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const header = useLocation().pathname.split('/')[1];

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
              navigate('/');
            }}
            selected={header === ''}
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
              navigate('/projects');
            }}
            selected={header === 'projects'}
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
              navigate('/contact');
            }}
            selected={header === 'contact'}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={'Contact'} disablePadding>
          <ListItemButton
            onClick={() => {
              window.open('https://github.com/michaeljang94');
            }}
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={'GitHub'} />
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
