import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './componentes/home/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Ordenes_laboratorio } from './componentes/ordenes_laboratorio/Ordenes_laboratorio.jsx'
import { Perfil_usuario } from './componentes/perfil_usuario/Perfil_usuario.jsx'
import { Login } from './componentes/login/Login.jsx'
import Navbar from './test/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />


          <Route path="/ordenes_lab" element={<Ordenes_laboratorio/>}/>
          <Route path="/Perfil_usuario" element={<Perfil_usuario/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
    </Router>
  </StrictMode>,
)
