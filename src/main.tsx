import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import About from './routes/about.tsx'
import Proyects from './routes/proyects.tsx'
import Home from './routes/home/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='proyects' element={<Proyects />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
