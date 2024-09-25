import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import casa_img from '../img/casa.png';
import perfil_img from '../img/perfil.png';
import '../../styles/Style_Barra_lateral/Barra_lateral.css';

export const Barra_lateral = () => {


  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/home" className="flex items-center p-2 hover:bg-[#2196F3] rounded">
              <img src={casa_img} alt="Casa" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Perfil_usuario" className="flex items-center p-2 hover:bg-[#2196F3] rounded">
              <img src={perfil_img} alt="Perfil" />
              <span>Perfil del usuario</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};