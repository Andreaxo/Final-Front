import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "antd";
import '../../styles/Styles_Ordenes_Laboratorio/Ordenes_laboratorio.css';

export const Ordenes_laboratorio = () => {
  const userId = sessionStorage.getItem('usuarioId'); 
  const [user, setUser] = useState(null);
  const [orden, setOrden] = useState(null);
  const [eps, setEps] = useState(null);
  const [error, setError] = useState(null);

  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingOrden, setLoadingOrden] = useState(true);
  const [loadingEps, setLoadingEps] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, ordenResponse, epsResponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/usuarios/${userId}`), // Usando el ID de usuario fijo
          axios.get(`http://localhost:3000/api/orden-resultados/${userId}`), // Usando el ID de usuario fijo
          axios.get(`http://localhost:3000/api/eps/${userId}`) // Usando el ID de usuario fijo
        ]);

        if (userResponse.data.usuario) setUser(userResponse.data.usuario);
        if (ordenResponse.data.orden) {
          const orden = ordenResponse.data.orden;
          const pruebaResponse = await axios.get(`http://localhost:3000/api/pruebas/${userId}`);
          if (pruebaResponse.data.prueba) {
            setOrden({ ...orden, ...pruebaResponse.data.prueba });
          }
        }
        if (epsResponse.data.eps) setEps(epsResponse.data.eps);
      } catch (error) {
        setError(`Error al obtener los datos: ${error.message}`);
      } finally {
        setLoadingUser(false);
        setLoadingOrden(false);
        setLoadingEps(false);
      }
    };

    fetchData();
  }, []); // Dependencia de userId para que se ejecute al cambiar

  if (loadingUser || loadingOrden || loadingEps) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  const nombreCompleto = user 
    ? `${user.nombre1 || ''} ${user.nombre2 || ''} ${user.apellido1 || ''} ${user.apellido2 || ''}`.trim() 
    : 'No especificado';

  const createDataSource = (orden) => {
    if (!orden || typeof orden !== 'object') return [];
    
    return [{
      key: 1,
      codigo: orden.id_procedimiento || 'No especificado',
      Prueba: orden.nombre_prueba || 'No especificado',
      resultado: orden.res_memo || orden.res_opcion || orden.res_numerico || orden.res_texto || 'No especificado',
      referencia: 'No disponible',
      Unidad: orden.unidad || 'No especificado',
    }];
  };

  const dataSource = createDataSource(orden);

  const columns = [
    {
      title: 'Código del procedimiento',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Nombre de la prueba',
      dataIndex: 'Prueba',
      key: 'Prueba',
    },
    {
      title: 'Resultado',
      dataIndex: 'resultado',
      key: 'resultado',
    },
    {
      title: 'Unidad',
      dataIndex: 'Unidad',
      key: 'Unidad',
    },
  ];

  return (
    <>
      <div className="datos_usuario">
        <div className="paciente">
          <p>Paciente</p>
          <p className='respuestas'>{nombreCompleto}</p>
        </div>
        <div className="telefono">
          <p>Teléfono</p>
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
          <p className='respuestas'>{orden?.fecha ? new Date(orden.fecha).toLocaleDateString() : 'No especificado'}</p>
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
      <Table className='tabla' dataSource={dataSource} columns={columns} pagination={false} />
      <hr />
    </>
  );
};
