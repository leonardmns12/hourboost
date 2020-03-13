import React, { Fragment } from 'react';
import './index.scss';

class Footer extends React.Component{
    render(){
        return(
            <Fragment>
            <footer className="page-footer font-small bg-light unique-color-dark">

            <div className="div-footer">
                <div className="container">


                <div className="row py-4 d-flex align-items-center">

            
                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0">Get connected with us on social networks!</h6>
                    </div>
            
                    <div className="col-md-6 col-lg-7 text-center text-md-right">

            
                    <a className="fb-ic" href="/#">
                        <i className="fab fa-facebook-f white-text mr-4"> </i>
                    </a>
                
                    <a className="tw-ic" href="/#">
                        <i className="fab fa-twitter white-text mr-4"> </i>
                    </a>
                
                    <a className="gplus-ic" href="/#">
                        <i className="fab fa-google-plus-g white-text mr-4"> </i>
                    </a>
            
                    <a className="li-ic" href="/#">
                        <i className="fab fa-linkedin-in white-text mr-4"> </i>
                    </a>
                
                    <a className="ins-ic" href="/#">
                        <i className="fab fa-instagram white-text"> </i>
                    </a>

                    </div>
            

                </div>
            

                </div>
            </div>


            <div className="container text-center text-md-left mt-5">

            
                <div className="row mt-3">

                
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                
                    <h6 className="text-uppercase font-weight-bold">Hourboosting</h6>
                    <hr className="deep-purple deep-purple-err accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <p>Project is a Steam Games Hourboosting Service , Trusted since 2020.</p>

                </div>
            
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase font-weight-bold">Products</h6>
                    <hr className="deep-purple deep-purple-err accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <p>
                    <a href="/#">Control Panel</a>
                    </p>
                    <p>
                    <a href="#!">Register</a>
                    </p>
                    <p>
                    <a href="#!">Login</a>
                    </p>

                </div>
            
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                    <hr className="deep-purple deep-purple-err accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                    <a href="#!">Home</a>
                    </p>
                    <p>
                    <a href="#!">About</a>
                    </p>
                    <p>
                    <a href="#!">Pricing</a>
                    </p>
                    <p>
                    <a href="#!">Faq</a>
                    </p>

                </div>
            
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr className="deep-purple deep-purple-err accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>
                    <i className="fas fa-home mr-3"></i> Gurame IV, 15116, IDN</p>
                    <p>
                    <i className="fas fa-envelope mr-3"></i> support@project.com</p>
                    <p>
                    <i className="fas fa-phone mr-3"></i> + 62 812 9040 4447</p>
            

                </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> Project.com</a>
            </div>
            </footer>
            </Fragment>
        )
    }
}

export default Footer;