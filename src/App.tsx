import { SideNavigation } from './components/SideNavigation';
import { MyAppBar } from './components/MyAppBar';
import { HashRouter, Route, Routes, useLocation } from 'react-router';
import { Homepage } from './pages/Homepage';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Contact } from './pages/Contacts';
import { ProjectsPage } from './pages/ProjectsPage';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <HashRouter>
          <CssBaseline />
          <MyAppBar setNavbarOpen={setOpen} />
          <SideNavigation
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          />
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/projects" element={<ProjectsPage />}></Route>
            </Routes>
          </Box>
        </HashRouter>
      </Box>
    </>
  );
}

export default App;
