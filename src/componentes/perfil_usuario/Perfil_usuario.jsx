import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/Styles_Perfil_Usuario/Perfil_usuario.css';
import icon_user from '../img/user.png';
import tipoID from '../img/id.png';
import n_id from '../img/n_id.png';
import genero from '../img/genero.png';
import nombre from '../img/etiqueta.png';
import calendario from '../img/calendario.png';
import mapa from '../img/mapa.png';
import celular from '../img/telefono-movil.png';
import email from '../img/email.png';

export const Perfil_usuario = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const id = sessionStorage.getItem('usuarioId'); // Obtiene el ID del usuario de sessionStorage

        // Verifica si el ID existe
        if (!id) {
            setError("No se encontró un ID de usuario.");
            setLoading(false);
            return;
        }

        // Usa el ID en la llamada a la API
        axios.get(`http://localhost:3000/api/usuarios/${id}`)
            .then(response => {
                if (response.data.usuario) {
                    setUser(response.data.usuario);
                } else {
                    setError("No se encontraron datos de usuario.");
                }
                setLoading(false);
            })
            .catch(err => {
                setError("Hubo un error al obtener los datos del usuario.");
                setLoading(false);
            });
    }, []); // No se necesita id como dependencia ya que se obtiene de sessionStorage

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (!user) return <div>No se encontraron datos de usuario.</div>;

    const nombreCompleto = `${user.nombre1 || ''} ${user.nombre2 || ''} ${user.apellido1 || ''} ${user.apellido2 || ''}`.trim();

    return (
        <>
            <div className="perfil_paciente">
                <div className="imagenes">
                    <img src={icon_user} alt="User Icon" width='200px' height='200px'/>
                </div>
                <div className="texto_perfil_paciente">
                    <h1>Estimado {user.nombre1 || 'Usuario'}</h1>
                    <p>Un gusto atenderte nuevamente</p>
                </div>
            </div>

            <div className="perfil_datos">
                <div className="tipo_id2">
                    <img src={tipoID} alt="ID Type" height='24px' width='24px'/>
                    <p>Tipo de identificación:</p>
                    <p className='respuestas'>{user.tipo_documento || 'No especificado'}</p>
                </div>

                <div className="n_id2">
                    <img src={n_id} alt="ID Number" width='24px' height='24px'/>
                    <p>Número de identificación:</p>
                    <p className='respuestas'>{user.numeroid || 'No especificado'}</p>
                </div>

                <div className="nombre_completo">
                    <img src={nombre} alt="Full Name" width='24px' height='24px' />
                    <p>Nombre completo:</p>
                    <p className='respuestas'>{nombreCompleto || 'No especificado'}</p>
                </div>

                <div className="fecha_n2">
                    <img src={calendario} alt="Birth Date" width='24px' height='24px' />
                    <p>Fecha de nacimiento:</p>
                    <p className='respuestas'>{user.fechanac ? new Date(user.fechanac).toLocaleDateString() : 'No especificado'}</p>
                </div>

                <div className="sexo_biologico">
                    <img src={genero} alt="Biological Sex" width='24px' height='24px' />
                    <p>Sexo biológico:</p>
                    <p className='respuestas'>{user.id_sexobiologico === 1 ? 'Masculino' : 'Femenino'}</p>
                </div>

                <div className="direccion_r">
                    <img src={mapa} alt="Address" width='24px' height='24px' />
                    <p>Dirección de Residencia:</p>
                    <p className='respuestas'>{user.direccion || 'No especificado'}</p>
                </div>

                <div className="n_celular">
                    <img src={celular} alt="Cell Phone" height='24px' width='24px' />
                    <p>Número de celular:</p>
                    <p className='respuestas'>{user.tel_movil || 'No especificado'}</p>
                </div>

                <div className="email">
                    <img src={email} alt="Email" width='24px' height='24px' />
                    <p>Correo electrónico:</p>
                    <p className='respuestas'>{user.email || 'No especificado'}</p>
                </div>
            </div>
        </>
    );
};
