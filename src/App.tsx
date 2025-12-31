import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Button, Drawer, List, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppBar position="static">
      <Toolbar>
<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default App
