import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/Styles_Ordenes_Laboratorio/Ordenes_laboratorio.css';
import { Table } from "antd";

export const Ordenes_laboratorio = () => {
  const [user, setUser] = useState(null);
  const [orden, setOrden] = useState(null);
  const [eps, setEps] = useState(null);
  const [error, setError] = useState(null);

  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingOrden, setLoadingOrden] = useState(true);
  const [loadingEps, setLoadingEps] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/usuarios/1')
      .then(response => {
        if (response.data.usuario) {
          setUser(response.data.usuario);
        } else {
          setError("No se encontraron datos de usuario.");
        }
      })
      .catch(error => setError(`Error al obtener los datos del usuario: ${error.message}`))
      .finally(() => setLoadingUser(false));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/api/orden-resultados/1')
      .then(response => {
        if (response.data.orden) {
          setOrden(response.data.orden);
        } else {
          setError("No se encontraron datos de la orden.");
        }
      })
      .catch(error => setError(`Error al obtener los datos de la orden: ${error.message}`))
      .finally(() => setLoadingOrden(false));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/api/eps/1')
      .then(response => {
        if (response.data.eps) {
          setEps(response.data.eps);
        } else {
          setError("No se encontraron datos de la EPS.");
        }
      })
      .catch(error => setError(`Error al obtener los datos de la EPS: ${error.message}`))
      .finally(() => setLoadingEps(false));
  }, []);

  if (loadingUser || loadingOrden || loadingEps) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  const nombreCompleto = user 
    ? `${user.nombre1 || ''} ${user.nombre2 || ''} ${user.apellido1 || ''} ${user.apellido2 || ''}`.trim() 
    : 'No especificado';

  // Actualizar dataSource para incluir los datos de la orden
  const dataSource = [
    {
      key: '1',
      fecha: new Date(orden?.fecha).toLocaleDateString() || 'No especificado',
      codigoDocumento: orden?.codigo_documento || 'No especificado',
      numeroOrden: orden?.numero || 'No especificado',
    },
  ];

  // Actualizar columnas para incluir los nuevos campos
  const columns = [
    {
      title: 'Fecha de la orden',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Código del documento',
      dataIndex: 'codigoDocumento',
      key: 'codigoDocumento',
    },
    {
      title: 'Número de la orden',
      dataIndex: 'numeroOrden',
      key: 'numeroOrden',
    },
  ];

  return (
    <>
      <div className="datos_usuario">
        <div className="paciente">
          <p>Paciente</p>
          <p className='respuestas'>{nombreCompleto || 'No especificado'}</p>
        </div>
        <div className="telefono">
          <p>Telefono</p>
          <p className='respuestas'>{user?.tel_movil || 'No especificado'}</p>
        </div>
        <div className="id">
          <p>Identificación</p>
          <p className='respuestas'>{user?.tipo_documento || 'No especificado'}</p>
          <p className='respuestas'>{user?.numeroid || 'No especificado'}</p>
        </div>
        <div className="sexo">
          <p>Sexo/edad</p>
          <p className='respuestas'>{user?.id_sexobiologico === 1 ? 'Masculino' : 'Femenino'}</p>
        </div>
        <div className="fecha">
          <p>Fecha orden</p>
          <p className='respuestas'>{new Date(orden?.fecha).toLocaleDateString() || 'No especificado'}</p>
        </div>
        <div className="admin_salud">
          <p>Administradora de salud</p>
          <p className='respuesta'>{eps?.razonsocial || 'No especificado'}</p>
        </div>
      </div>
      <br />
      <hr /> <br/>
      <div className="hematologia">
        <h2>Nombre del grupo (Hematología)</h2>
        <p>Nombre del procedimiento</p>
      </div>
      <Table className='tabla' dataSource={dataSource} columns={columns} />
      <hr />
    </>
  );
};
