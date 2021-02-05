import React from 'react';
import './Menu.css';
import Nav from './Nav.js';
import Search from './Search.js';
import {Link} from 'react-router-dom';

class Menu extends React.Component {
    
    constructor(props){
       super(props);
        
    }
    render(){
       return(
        <div>




        <div className="head bg-dark align-content-center  ">
           <div className="row d-flex align-content-center justify-content-center" >
           <div className="col-4 logo d-flex-r justify-content-center align-items-center align-content-center">
           <div className="">
            <img className="" src="./images/logo2.png" alt="logo" />
           </div>
           <div>
            <p className="small ">Macumba Store SA</p>
           </div>
           </div>
           <div className="col-5 d-flex-col justify-content-center align-text-center align-content-center align-items-center">
            <div className="titulo d-flex justify-content-center align-text-center align-content-center align-items-center "> Macumba store</div> 
            <div className="parrafo d-flex align-text-center align-content-center align-content-center justify-content-center"> Tenemos todo lo que tu planta necesita </div>
           </div>
           <div className="col-3  d-flex justify-content-around align-items-center">
                <div className="login d-flex-r ">
                    <div className="">
                    <i class="bi bi-person-circle "></i>
                    </div>
                    <div>
                    <i class="bi bi-basket3"></i>
                    </div>
                 </div>
           </div>
        
           </div>
        </div>  


        <Nav className="myNav"></Nav>
        <Search></Search>
        </div> 
        )
    }

    
}

export default Menu;
