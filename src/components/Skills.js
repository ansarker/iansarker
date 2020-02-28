import React from 'react';

import '../styles/Publicaions.css';
import '../styles/styles.css';

class Skills extends React.Component {
    render() {
        const skills = this.props.skills;
        let lastCategory = null;
        const skillList = [];
        
        let i = 0;
        skills.forEach(skill => {
            if(skill.type !== lastCategory) {
                skillList.push(<h3 className="strong info"> {skill.type} </h3>);
            }
            skillList.push(<li className="item-name" key={skill.id}> {skill.name} </li>)
            lastCategory = skill.type;
            i++;
        });

        return(
            <div className="component">
                <h1 className="header-title strong">Skills</h1>
                <div className="publications-list">
                    <ul className="list-style-view">
                        {skillList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Skills;