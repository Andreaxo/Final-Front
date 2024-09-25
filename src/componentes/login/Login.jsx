import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import '../../styles/Styles_Login.css/Login.css'

import { Col, Row } from 'antd';



import labImage1 from '../img/lab_1.jpg';
import labImage2 from '../img/lab_2.jpg';
import labImage3 from '../img/lab_3.jpg';

import { Carousel } from 'antd';

export const Login = () => {

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        width: '',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
};
    return (
        <>
        <div className="login_container_main">

        <div className="main_text">
        <h1 className='titulo'> Bienvenido a iniciar sesión</h1>
        <p> Para ingresar con una cuenta
            anteriormente creada, por favor completa
            los siguientes campos
        </p>

        <div className="carrusel_fotos">
    <Carousel autoplay arrows dotPosition="left" infinite={false}>
      <div>
        <h3 style={contentStyle}><img  className="carousel-image" src={labImage1}/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img className="carousel-image" src={labImage2}/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img className="carousel-image" src={labImage3} /></h3>
      </div>
    </Carousel>
        </div>

        </div>

        <div className="sin_carrusel">
          <div className="opt_container">
            <div className="tipo_id1">
        <form action='#'>
            <label htmlFor='opt'>Tipo de identificación</label>
            <br/> <br/>
            <select name='opciones' id="opt">
                <option value={'default'}> ¡Eliga una opción!</option>
                <option>Registro Civil</option>
                <option>Tarjeta de identidad</option>
                <option>Cédula de Ciudadanía</option>
                <option>Cédula de Extranjería</option>
            </select>
        </form>
        </div>

        <div className="n_id1">
        <p>Número de identificación</p>
        <Input type='number' placeholder=''/>
        </div>

        <div className="fecha_n1">
            <p>Fecha de nacimiento</p>
        <Input size='default size' type='date'/>
        <br/>
        <br/>
        <div className="btn_ingresar">
        <Button>Ingresar</Button>
        </div>
        </div>
        </div>
        </div>



        </div>
        </>
    )
}