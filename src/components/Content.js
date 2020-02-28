import React, {Component} from 'react';

import About from './About';
import Publications from './Publications';
import Interest from './Interest';
import '../styles/Content.css';
import Skills from './Skills';


export default class Content extends Component {
    render() {
        const content = this.props.content;
        return(
            <div className="content">
				<About about={content.about} />
                <Publications publications={content.publications}/>
                <Interest interests={content.interests}/>
                <Skills skills={content.skills} />
            </div>
        );
    }
}