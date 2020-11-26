import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);


class Menu extends Component {
    render() {
        return (
            <div className="footer-section">
                <ul className="inline-list-ul">
                    <li className="social-sites-li">
                        <a href="https://www.github.com/ansarker" className="social-sites strong">
                            <FontAwesomeIcon icon={faGithub} /> Github
                        </a>
                    </li>
                    <li className="social-sites-li">
                        <a href="https://www.linkedin.com/in/iansarker" className="social-sites strong"> 
                            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;