import { SideNavigation } from './components/SideNavigation';
import { MyAppBar } from './components/MyAppBar';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Homepage } from './pages/Homepage';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Contact } from './pages/Contacts';

function App() {
  const [header, setHeader] = useState('');
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <BrowserRouter>
          <CssBaseline />
          <MyAppBar header={header} />
          <SideNavigation setHeader={setHeader} />
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
