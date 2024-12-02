import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Linkedin from '../util/linkedinlogo.png';
import Github from '../util/githublogo.png';

function Footer() {
    return (
        <div className="Footer">
            <h3>Thanks for stopping by!</h3>
            You can also find me on
            <div className="socialsWrapper">
            <a href="https://www.linkedin.com/in/emil-cavic" target="_blank"><img src={Linkedin} className="linkedinfoot" alt="LinkedIn Logo" /></a>
            <a href="https://github.com/MrEmilCavic" target="_blank"><img src={Github} className="githubfoot" alt="github Logo" width="50px"/></a>
            </div>
            Website made by Emil Čavić
        </div>
    );
}

export default Footer;