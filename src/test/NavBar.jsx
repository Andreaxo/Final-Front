import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {


  return (
    <nav className="custom-navbar">
      <ul>
        <li>
          <NavLink to="/home" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ordenes_lab" activeclassname="active">Ordenes Laboratorio</NavLink>
        </li>
        <li>
          <NavLink to='/Perfil_usuario' activeclassname="active">Perfil Usuario</NavLink>
        </li>
        <li>
          <NavLink to='/Login' activeclassname="active">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
