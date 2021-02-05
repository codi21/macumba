import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends React.Component{

    render(){
        return(
        <ul className="nav  d-flex justify-content-around bg-dark mb-4">
            <li className="nav-item w-4">
                <Link to="/" className="nav-link text-white">Productos</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link text-white"> Quienés somos ? </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">Contacto</Link>
            </li>
        </ul>
        )
    }
}



export default Nav;
