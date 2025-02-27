import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'

import App from './App.tsx'
import About from './routes/about/about.tsx'
import Proyects from './routes/proyects/proyects.tsx'
import Home from './routes/home/home.tsx'
import Experience from './routes/experience/experience.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='proyects' element={<Proyects />} />
          <Route path='experience' element={<Experience />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
