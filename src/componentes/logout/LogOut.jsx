import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Perfil_usuario = () => {
    const navigate = useNavigate(); // Para redirigir al usuario

    const handleLogout = () => {
        // Eliminar los datos del usuario
        localStorage.removeItem('userId');
        localStorage.removeItem('token');

        // Redirigir al usuario a la página de login
        navigate('/login');
    };

    return (
        <div>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};
