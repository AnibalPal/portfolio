import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'

import App from './App.tsx'
import About from './routes/about/about.tsx'
import Home from './routes/home/home.tsx'
import Experience from './routes/experience/experience.tsx'
import ProyectsBase from './routes/proyects/proyects-base.tsx'

import './index.css'

const makeRoot = () => {
  
  return <StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='proyects' element={<ProyectsBase />} />
            <Route path='experience' element={<Experience />} />
          </Route>
        </Routes>
      </HashRouter>
  </StrictMode>
}

createRoot(document.getElementById('root')!).render(makeRoot())
