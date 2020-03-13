import React from 'react';
import './index.scss';
import $ from 'jquery';
class Navbar extends React.Component{

    componentDidMount(){

    }

    gotoLogin = () => {
        this.props.history.push('/login');
    }

    scrollTo = (id) => {
        console.log('re');
        if($(id).length){
            const getOffset = $(id).offset().top;
            var targetDistance = 50;
            $('html,body').animate({
                scrollTop: getOffset - targetDistance
            }, 1000)
        }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
              <div className="container">
                <button className="navbar-brand">Project</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <button className="nav-item nav-link active btn-nav">HOME <span className="sr-only">(current)</span></button>
                        <button className="nav-item nav-link active btn-nav" onClick={()=>{ this.scrollTo('#section2') }}>ABOUT</button>
                        <button className="nav-item nav-link active btn-nav" onClick={() => { this.scrollTo('#section1')}}>PRICING</button>
                        <button className="nav-item nav-link active btn-nav">FAQ</button>
                        <button className="btn btn-primary tombol" onClick={this.gotoLogin.bind(this)}>Login</button>
                        </div>
                    </div>
               </div>
            </nav>
        )
    }
}

export default Navbar;