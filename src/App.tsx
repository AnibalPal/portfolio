import { Outlet, useLocation, useNavigate } from 'react-router'
import './App.css'
import "../i18n"

import { useEffect } from 'react';
import Navbar from './components/navbar';
import { useMediaQuery } from 'react-responsive';
import { DeviceInfoContext } from './contexts/deviceInfo';

function App() {

  const deviceType = useMediaQuery({
    query: '(max-width: 400px)'
  }) ? "mobile" : "desktop";

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [])

  return (
    <DeviceInfoContext value={deviceType}>
      <div className='app-container'>
        <Navbar />
        <Outlet />
      </div>
    </DeviceInfoContext>
  )
}

export default App
