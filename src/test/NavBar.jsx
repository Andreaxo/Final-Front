import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {


  return (
    <nav className="custom-navbar">
      <ul>
        <li>
          <NavLink to="/home/" activeclassname="active">Home</NavLink>
        </li>

        <li>
          <NavLink to='/Perfil_usuario/' activeclassname="active">Perfil Usuario</NavLink>
        </li>
        <li>
          <NavLink to='/logout' activeclassname="active">Cerrar sesión</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
