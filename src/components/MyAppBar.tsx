import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router';

export interface MyAppBarProps {
  setNavbarOpen: (open: boolean) => void;
}
export const MyAppBar: React.FC<MyAppBarProps> = ({ setNavbarOpen }) => {
  const header = useLocation().pathname.split('/')[1];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: 'black' }}
            onClick={() => {
              setNavbarOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {header || 'michaeljang94'}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
