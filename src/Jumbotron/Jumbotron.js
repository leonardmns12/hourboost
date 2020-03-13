import React from 'react';
import './index.scss';

class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumbotron jumbotron1 jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Boost Your <span>Steam</span> Hour Games for <span>FREE!</span></h1>
            </div>
            </div>
        )
    }
}

export default Jumbotron;