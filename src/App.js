import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from './Card.js';
import ListCard from './ListCard.js';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Menu from './Menu.js';
import About from './About.js';
import Contact from './Contact.js';


class App extends React.Component {
    
    render(){
        return( 
            <div className="container-fluid">
            <Router>
                <Menu />
                <Switch>

                    <Route path="/" exact component={ListCard} ></Route>
                    <Route path="/about" component={ About } ></Route>
                    <Route path="/contact" component={ Contact } ></Route>
                </Switch>
            </Router>

            </div>
        )
    }
}
export default App;
