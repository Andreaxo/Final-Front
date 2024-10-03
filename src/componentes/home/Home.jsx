import React, { useState, useEffect } from 'react';
import { Input, Table, DatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import '../../styles/Styles_Home.css/Home.css';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [orderFilter, setOrderFilter] = useState('');
  const [dateRange, setDateRange] = useState([]);

  const userId = sessionStorage.getItem('usuarioId'); 

  useEffect(() => {

    const fetchData = async () => {
      try {
        const [ordenResponse, pruebaResponse] = await Promise.all([
          axios.get(`http://localhost:3000/api/orden-resultados/${userId}`),
          axios.get(`http://localhost:3000/api/pruebas/${userId}`)
        ]);

        const orden = ordenResponse.data.orden;
        const prueba = pruebaResponse.data.prueba;

        // Combinar los datos de orden y prueba
        const combinedData = {
          key: orden.id_orden,
          fecha: moment(orden.fecha).format('DD/MM/YYYY'),
          id_procedimiento: orden.id_procedimiento,
          nombre_prueba: prueba.nombre_prueba,
          codigo_prueba: prueba.codigo_prueba,
          resultado: orden.res_opcion || orden.res_numerico || orden.res_texto || orden.res_memo
        };

        setData([combinedData]);
        setFilteredData([combinedData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => {
      const orderMatch = item.id_procedimiento.toString().includes(orderFilter);
      const itemFechaMoment = moment(item.fecha, 'DD/MM/YYYY');
      const dateMatch =
        dateRange.length === 0 ||
        (dateRange[0] && dateRange[1] && itemFechaMoment.isBetween(dateRange[0], dateRange[1], 'day', '[]'));

      return orderMatch && dateMatch;
    });

    setFilteredData(filtered);
  }, [data, orderFilter, dateRange]);

  const handleOrderFilterChange = (e) => {
    setOrderFilter(e.target.value);
  };

  const handleDateRangeChange = (dates) => {
    setDateRange(dates || []);
  };

  const handleVisualization = (record) => {
    navigate(`/ordenes_lab/${userId}`);
  };

  const columns = [
    {
      title: 'Fecha de la orden',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'ID del procedimiento',
      dataIndex: 'id_procedimiento',
      key: 'id_procedimiento',
    },
    {
      title: 'Nombre de la prueba',
      dataIndex: 'nombre_prueba',
      key: 'nombre_prueba',
    },
    {
      title: 'Resultado',
      dataIndex: 'resultado',
      key: 'resultado',
    },
    {
      title: 'Acción',
      dataIndex: '',
      key: 'x',
      render: (_, record) => <a onClick={() => handleVisualization(record)}>Visualización</a>,
    },
  ];

  return (
    <div className="container">
      <h1>Órdenes de Laboratorio</h1>
      <div className="filters">
        <div className="filter-item">
          <p>Número de orden</p>
          <Input
            size="large"
            placeholder="Ingresa el ID del procedimiento"
            prefix={<UserOutlined />}
            onChange={handleOrderFilterChange}
          />
        </div>
        <div className="filter-item">
          <p>Rango de fecha</p>
          <RangePicker
            size="large"
            onChange={handleDateRangeChange}
            format="DD/MM/YYYY"
            allowEmpty={[true, true]}
          />
        </div>
      </div>
      <div className="lab-table">
        <Table
          columns={columns}
          dataSource={filteredData}
          loading={loading}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>
                Código de la prueba: {record.codigo_prueba}
              </p>
            ),
            rowExpandable: () => true,
          }}
        />
      </div>
    </div>
  );
};