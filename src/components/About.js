import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div className="component">
                <h1 className="header-title strong">About</h1>
                <div className="aboutme">
                    <p>{this.props.about}</p>
                </div>
            </div>
        );
    }
}

export default About;