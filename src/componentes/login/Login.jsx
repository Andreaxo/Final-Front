import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import '../../styles/Styles_Login.css/Login.css'

import labImage1 from '../img/lab_1.jpg';
import labImage2 from '../img/lab_2.jpg';
import labImage3 from '../img/lab_3.jpg';

// import {URL} from '../../Const/Const.js'
// import axios from 'axios';
import { Carousel } from 'antd';
import { useState } from 'react';

export const Login = () => {
  const contentStyle = {
    margin: 0,
    height: '500px',
    color: '#fff',
    width: '',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

/* INPUT NOMBRE */
const[inputNombre, setInputNombre] = useState('');

const onInputNombre = (e) => {
    setInputNombre(e.target.value)
}


/* INPUTS FECHA NACIMIENTO*/
const [inputNacimiento,setInputNacimiento] = useState('');

const onInputNacimiento = (e) => {
    setInputNacimiento(e.target.value);
}

/* INPUT FORM */
const [inputForm, setInputForm] = useState('');

const onInputForm = (e) => {
    setInputForm(e.target.value)
}

/* ON CLICK BOTON */
const Ingresar = () => {
    console.log('Tipo de id: ', inputForm)
    console.log("Nombre: ",inputNombre)
    console.log("Nacimiento", inputNacimiento);
}
//     axios({
//         method: 'post',
//         url: URL,
//         data: {

//         }
//     })
// }

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
                              <select value={inputForm} onChange={onInputForm} name='opciones' id="opt">
                                  <option value={'default'}>¡Eliga una opción!</option>
                                  <option value="Registro_civil">Registro Civil</option>
                                  <option value="Tarjeta_dentidad">Tarjeta de identidad</option>
                                  <option value="Cedula_ciudadania">Cédula de Ciudadanía</option>
                                  <option value="Cedula_extranjeria">Cédula de Extranjería</option>
                              </select>
                          </form>
                      </div>

                      <div className="n_id1">
                          <p>Número de identificación</p>
                          <Input value={inputNombre} onChange={onInputNombre} type='number' placeholder='' />
                      </div>

                      <div className="fecha_n1">
                          <p>Fecha de nacimiento</p>
                          <Input value={inputNacimiento} onChange={onInputNacimiento} size='default size' type='date' />
                          <br />
                          <br />
                          <div className="btn_ingresar">
                              <Button onClick={Ingresar}>Ingresar</Button>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="carrusel_fotos">
                  <Carousel autoplay arrows dotPosition="left" infinite={true}>
                      <div>
                          <h3 style={contentStyle}><img className="carousel-image" src={labImage1} /></h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}><img className="carousel-image" src={labImage2} /></h3>
                      </div>
                      <div>
                          <h3 style={contentStyle}><img className="carousel-image" src={labImage3} /></h3>
                      </div>
                  </Carousel>
              </div>
          </div>
      </div>
  );
}
