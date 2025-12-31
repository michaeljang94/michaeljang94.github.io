import { AppBar, Toolbar, Typography } from '@mui/material';
import { SIDE_NAVIGATION_WIDTH } from './SideNavigation';

export interface MyAppBarProps {
  header?: string;
}
export const MyAppBar: React.FC<MyAppBarProps> = ({ header }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${SIDE_NAVIGATION_WIDTH}px)`,
          ml: `${SIDE_NAVIGATION_WIDTH}px`,
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
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
