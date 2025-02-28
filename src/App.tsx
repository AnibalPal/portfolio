import { Outlet, useLocation, useNavigate } from 'react-router'
import './App.css'
import "../i18n"

import { useEffect } from 'react';
import Navbar from './components/navbar';

function App() {

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [])

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
