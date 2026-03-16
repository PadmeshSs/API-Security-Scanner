import { ColorModeContext, useMode, SidebarContext } from './Themes'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import './App.css'
import ProSidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isBroken, setBroken] = useState(false);

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };




  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isBroken, setBroken}}>
            <CssBaseline />
            <div className='app'>
              <ProSidebar />
              <main className='content'>
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </main>
            </div>
          </SidebarContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
