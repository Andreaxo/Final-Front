import React from 'react';
import { Input } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import Table from 'antd/lib/table';
import '../../styles/Styles_Home.css/Home.css';

export const Home = () => {
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
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    // Resto de los datos...
  ];

  return (
    <div className="container">
      <h1>Ordenes de Laboratorio</h1>
      <div className="filters">
        <div className="filter-item">
          <p>Numero de orden</p>
          <Input
            size="large"
            placeholder="Ingresa tu orden de laboratorio"
            prefix={<UserOutlined />}
          />
        </div>
        <div className="filter-item">
          <p>Rango de fecha</p>
          <div className="date-range">
            <Input
              size="large"
              type="date"
              prefix={<CalendarOutlined />}
            />
            <Input
              size="large"
              type="date"
              prefix={<CalendarOutlined />}
            />
          </div>
        </div>
      </div>
      <div className="lab-table">
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </div>
    </div>
  );
};