import React from 'react';
import './InProgress.css';
import OnTheWay from './ontheway.mp4';


function InProgress() {
    return(
        <div className="InProgress">
            <h1>Under construction...</h1>
            <video className="BackgroundVideo" autoPlay loop muted>
                <source src={OnTheWay} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>Powder monkeys! The website is blown to bits!<br />
            The site will return with a fresh, new design and content shortly!</h2>
        </div>
    );
}

export default InProgress;