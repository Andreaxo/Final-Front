import '../../styles/Styles_Ordenes_Laboratorio/Ordenes_laboratorio.css'
import { Table } from "antd";

export const Ordenes_laboratorio = () => {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '3',
          name: 'Carlos',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '4',
          name: 'Jaime',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '5',
          name: 'Juan',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '6',
          name: 'Andres',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return(
        <>
        <div className="datos_usuario">
            <div className="paciente">
            <p>Paciente</p>
            </div>
            <div className="telefono">
            <p>Telefono</p>
            </div>
            <div className="id">
            <p>Identificación</p>
            </div>
            <div className="medico">
            <p>Médico</p>
            </div>
            <div className="sexo">
            <p>Sexo/edad</p>
            </div>
            <div className="fecha">
            <p>Fecha orden</p>
            </div>
            <div className="admin_salud">
            <p>Administradora de salud</p>
            </div>
        </div>
        <br/>
        <hr/>

        <div className="hematologia">
            <h2>Nombre del grupo (Hematología)</h2>
            <p>Nombre del procedimiento</p>
            <Table className='tabla' dataSource={dataSource} columns={columns} />

            <hr/>

        </div>

        </>
    )
}