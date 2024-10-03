import { UserOutlined } from '@ant-design/icons';
import { Button, Input, message, Carousel, Modal } from 'antd';
import '../../styles/Styles_Login.css/Login.css';
import labImage1 from '../img/lab_1.jpg';
import labImage2 from '../img/lab_2.jpg';
import labImage3 from '../img/lab_3.jpg';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  // Estado para el modal y el OTP
  const [visible, setVisible] = useState(false);
  const [otp, setOtp] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/validate-otp', { otp });
      if (response.data.success) {
        message.success('OTP validado correctamente.');
        setVisible(false);
        navigate('/home'); // Redirigir a la página de inicio después de validar el OTP
      } else {
        message.error('OTP incorrecto. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al validar OTP:', error);
      message.error('Hubo un error al intentar validar el OTP');
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // Estado para los inputs del formulario
  const [inputNombre, setInputNombre] = useState('');
  const [inputNacimiento, setInputNacimiento] = useState('');
  const [inputCorreo, setCorreo] = useState('');
  const [inputForm, setInputForm] = useState('');

  // Función para manejar el inicio de sesión
  const Ingresar = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        tipo_documento: inputForm,
        numeroid: parseInt(inputNombre, 10),
        fechanac: inputNacimiento,
        email: inputCorreo,
      });

      const { message: authMessage, token, usuario } = response.data;

      if (token) {
        message.success(authMessage);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('usuario', JSON.stringify(usuario)); // Guardar información del usuario

        // Guardar el id_tipoid como variable global
        sessionStorage.setItem('usuarioId', usuario.id_tipoid);
        
        showModal(); // Mostrar modal para OTP después de un inicio exitoso

      } else {
        message.error('Token no recibido. Datos incorrectos.');
      }
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      message.error('Hubo un error al intentar iniciar sesión');
    }
  };

  const contentStyle = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className="login_container_main">
      <div className="main_text">
        <h1 className="titulo">Bienvenido a iniciar sesión</h1>
        <p>Para ingresar con una cuenta anteriormente creada, por favor completa los siguientes campos</p>
      </div>

      <div className="container_flex">
        <div className="sin_carrusel">
          <div className="opt_container">
            <div className="tipo_id1">
              <form action='#'>
                <label htmlFor='opt'>Tipo de identificación</label>
                <br /> <br />
                <select value={inputForm} onChange={(e) => setInputForm(e.target.value)} name='opciones' id="opt">
                  <option value={'default'}>¡Eliga una opción!</option>
                  <option value="Registro Civil">Registro Civil</option>
                  <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                  <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                  <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                </select>
              </form>
            </div>

            <div className="n_id1">
              <p>Número de identificación</p>
              <Input
                value={inputNombre} 
                onChange={(e) => setInputNombre(e.target.value)} 
                type='number' 
                placeholder='Ingresa tu número de identificación' 
              />
            </div>

            <div className="correo">
              <p><b>Correo electrónico</b></p>
              <Input 
                value={inputCorreo} 
                onChange={(e) => setCorreo(e.target.value)} 
                type='email' 
                placeholder='Ingresa tu correo electrónico' 
              />
            </div>

            <div className="fecha_n1">
              <p>Fecha de nacimiento</p>
              <Input 
                value={inputNacimiento} 
                onChange={(e) => setInputNacimiento(e.target.value)} 
                type='date' 
              />
              <br />
              <div className="btn_ingresar">
                <Button type="primary" onClick={Ingresar}>Ingresar</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="carrusel_fotos">
          <Carousel autoplay arrows dotPosition="left" infinite={true}>
            <div>
              <h3 style={contentStyle}><img className="carousel-image" src={labImage1} alt="Laboratorio 1" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img className="carousel-image" src={labImage2} alt="Laboratorio 2" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img className="carousel-image" src={labImage3} alt="Laboratorio 3" /></h3>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Modal para ingresar el OTP */}
      <Modal
        title="Ingrese su OTP"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
          placeholder='Ingresa el OTP recibido' 
        />
      </Modal>
    </div>
  );
};
