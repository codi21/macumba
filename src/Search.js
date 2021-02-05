import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return ( 
            <div className="row mb-5">
            <div className="col-4"></div>
            <div className="col-4 mb-4 d-flex justify-content-center"><input type="text" className="mysearch" placeholder="Busqueda..." />
</div>
            <div className="col-4"></div>
            </div>
        )
    }
}
export default Search;
