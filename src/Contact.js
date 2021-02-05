import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query:"",
            name:"",
            email:""
            
        }
    }
    render(){
        return(
            <div className="container">

                <div className="row">

                    <div className="col-3 comunication">
                        <form action="">
                            <div className="form-group">
                                <label for="name">Nombre :</label>
                                <input type="text" className="form-control" placeholder="Nombre por favor" id="name" name="name" />
                            </div>
                            <div className="form-group">
                                <label for="email">email :</label>
                                <input type="email" className="form-control" placeholder="email por favor" id="email" name="email" />
                            </div>
                             <div className="form-group">
                                <div>
                                <label for="text">Consulta :</label>
                                </div>
                                <textarea  className="form-control" value= { this.state.query } placeholder="Consulta ..." id="consulta" />
                                
                            </div>
                            <div className="">
                            <button type="submit" className="btn btn-dark mt-2 custom ">Enviar</button>
                            </div>
 
                        </form>
                    </div>
            <div className="col-3"></div>










                    <div className="col-6 information-contact">
            
                       <div className="row">
                            <div className="col-6"><h6>Tel</h6></div>
                            <div className="col-6"><p>2634246429</p></div>
                       </div>
                       <div className="row">
                            <div className="col-6"><h6>Email</h6></div>
                            <div className="col-6"><p>macumbastore94@gmail.com</p></div>
                       </div>
                       <div className="row">
                            <div className="col-6"><h6>Dirección</h6></div>
                            <div className="col-6"><p>B San Telmo M 'G' C 33 , San Martin , Mendoza , Argentina</p></div>
                       </div>
                        <div className="row">
                            <div className="col-6"><h6>Social</h6></div>
                            <div className="col-2">
                               <i class="bi bi-instagram"></i>
                            </div>
                            <div className="col-2">
                                <i class="bi bi-facebook"></i>
                            </div>
                            <div className="col-2">
                                <i class="bi bi-twitter"></i>
                            </div>
                       </div>           
                    </div>

                </div>



            </div>
        )
    }
}
export default Contact;
