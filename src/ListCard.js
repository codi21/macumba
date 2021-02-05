import React from 'react';
import './ListCard.css';
import Card from './Card.js';
import Axios from 'axios';


class ListCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            loading : true,
        }
    }
    componentDidMount(){
        Axios.get(`${process.env.REACT_APP_API}product`)

        .then((data)=>{
            this.setState({
                list : data.data.products,
                loading : false
                
            }); 
        })
        .catch((err)=>{
            if(err){
                console.log(err);
            }
        });
    }
    render(){
        const { list , loading } = this.state;
        if(loading){
            return (
                <p> Loading ...</p>
            )
        }
        return(
            <div className="row tp-50">
            { list.map((x) => {
                return(
                <div className="col-4" key = {x.title}>
                    <Card title = { x.title} description = {x.description} img = {x.images[0]} />

                </div>
                )
            }) }
            </div>
        )
    }
}

export default ListCard;
