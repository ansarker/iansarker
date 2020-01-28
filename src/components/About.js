import React from 'react';
import '../styles/About.css';


class About extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1 className="about-header">About</h1>
                <div className="aboutme">
                    <p>{this.props.about}</p>
                </div>
            </div>
        );
    }
}

export default About;