import '../../styles/Styles_Perfil_Usuario/Perfil_usuario.css'
import  icon_user from '../img/icon_user.png'
import tipoID from '../img/id.png'
import n_id from '../img/n_id.png'
import genero from '../img/genero.png'
import nombre from '../img/etiqueta.png'
import calendario from '../img/calendario.png'
import mapa from '../img/mapa.png';
import celular from '../img/telefono-movil.png'
import email from '../img/email.png';


export const Perfil_usuario = () => {

    return(
        <>
        <div className="perfil_paciente">
            <img src={icon_user}/>
            <h1>Bienvenido Andrea</h1>
            <p>Un gusto atenderte nuevamente</p>
        </div>

        <div className="perfil_datos">
            <div className="tipo_id2">
                <img src={tipoID} height='24px' width='24px'/>
                <p>Tipo de identificación</p>
            </div>

            <div className="n_id2">
                <img src={n_id} width='24px' height='24px'/>
                <p>Numero de Identificación</p>
            </div>

            <div className="nombre_completo">
                <img src={nombre} width='24px' height='24px' />
                <p>Nombre completo</p>
            </div>

            <div className="fecha_n2">
                <img src={calendario} width='24px' height='24px' />
                <p>Fecha de nacimiento</p>
            </div>

            <div className="sexo_biologico">
                <img src={genero} width='24px' height='24px' />
                <p>Sexo Biológico</p>
            </div>

            <div className="direccion_r">
                <img src={mapa} width='24px' height='24px' />
                <p>Dirección de Residencia</p>
            </div>

            <div className="n_celular">
                <img src={celular} height='24px' width='24px' />
                <p>Numero de celular</p>
            </div>

            <div className="email">
                <img src={email} width='24px' height='24px' />
                <p>Correo electrónico</p>
            </div>
        </div>
        </>
    )
}