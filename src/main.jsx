import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Announcement from './components/Announcement.jsx'
import Members from './components/Members.jsx'
import Events from './components/Events.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Test from './components/Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
