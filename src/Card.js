import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';


class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name  : props.name,
            priority : props.priority, 
            img : props.images 
        }
    }

    render(){
        return(
            <div className="card text-center mb-4">
                <img className="card-img-top" src={this.props.img } alt="Card Image" >
                 </img>
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                    <a href="#" className="btn btn-dark">Ver más</a>
                </div>
            </div>
        )
    }
}

export default Card;
