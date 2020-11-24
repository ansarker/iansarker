import React, {Component} from 'react';

import About from './About';
import Publications from './Publications';
import Interest from './Interest';
import Skills from './Skills';


export default class Content extends Component {
    render() {
        const content = this.props.content;
        return(
            <div className="content">
				<About about={content.about} />
                <Publications publications={content.publications}/>
                <Skills skills={content.skills} />
                <Interest interests={content.interests}/>
            </div>
        );
    }
}