import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/ordenes_lab">Ordenes Laboratorio</Link>
        </li>
        <li>
        <Link to='/Perfil_usuario'>Perfil Usuario</Link>
        </li>
        <li>
            <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;