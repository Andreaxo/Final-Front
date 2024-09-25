import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './componentes/home/Home.jsx';
import { Ordenes_laboratorio } from './componentes/ordenes_laboratorio/Ordenes_laboratorio.jsx';
import { Perfil_usuario } from './componentes/perfil_usuario/Perfil_usuario.jsx';
import { Login } from './componentes/login/Login.jsx';
import Navbar from './test/NavBar.jsx';
import { Barra_lateral } from './componentes/ui/barra_lateral.jsx';

const MainLayout = () => (
  <div>
    <Navbar />
    <div style={{ display: 'flex' }}>
      <Barra_lateral />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Perfil_usuario" element={<Perfil_usuario />} />
        <Route path="/ordenes_lab" element={<Ordenes_laboratorio />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);