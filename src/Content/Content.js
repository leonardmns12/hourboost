import React from 'react';
import './index.scss';

class Content extends React.Component{
    render(){
        return(
            <div className="container content">
                 <div className="row row1">
                    <div className="col-sm">
                    <div className="about-icon rounded-circle row justify-content-center">
                    <i className="fas fa-history fa-4x "></i>
                    </div>
                    <p>Boost Your Game for 24 Hour</p>
                    </div>
                    <div className="col-sm">
                    <div className="about-icon rounded-circle row justify-content-center">
                    <i className="fas fa-dollar-sign fa-4x "></i>
                    </div>
                    <p>Free charge of plan forever.</p>
                    </div>
                    <div className="col-sm">
                    <div className="about-icon rounded-circle row justify-content-center">
                    <i className="fas fa-comment-dots fa-4x "></i>
                    </div>
                    <p>Custom Auto-reply Messages.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;