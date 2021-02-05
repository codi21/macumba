import React from 'react';
import './About.css';

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row ">
                    <div className="col-4"></div>
                    <div className="titulo col-4 d-flex justify-content-center">
                        <h3>Quienés somos ?</h3>
                     </div>
                    <div className="col-4"></div>
                 </div>
                <div className="row">
                    <div className="parra1">
                        <p><b>Dedicación :</b> Somos una empresar principalmente dedicada a la fabricación/comercialización de productos  insumos utilizados en el proceso del cultivo de la marimba.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="parra2">
                        <p><b>Objetivos :</b> Nuestro objectivo primordial es poder producir , distribuir , mantener.<br/> 
            <ol>
                <li>Producir nuestra propia macoña con nuestros productos de calidad .</li>
                <li>Distribuir nuestros productos para que cada uno pueda vivir la experiencia del cultivo</li>

                <li>Mantener a todos nuestros clientes con un servicio tecnico capacitado en el cultivo y brindando los insumos necesarios </li>
            </ol>
            </p>
                    </div>
                </div>
            <div className="row">
                    <div className="parra3">
                        <p><b>Sociedad :</b>Nuestro compromiso con la sociedad , es que después de tanto prensado feo fumado acosta de la corrupción que vive hoy en día nuestra sociedad , vamos a tratar de entregar el mejor producto que sea posible </p>
                    </div>
            
            </div>
            <div className="row">
            <div className="col-4"></div>
            <div className="col-4 d-flex justify-content-center"><h4>BUENOS HUMOS!</h4></div>
            <div className="col-4"></div>
                
            </div>
            </div>
        )
    }
}

export default About;
