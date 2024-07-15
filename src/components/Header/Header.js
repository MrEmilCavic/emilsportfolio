import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import Crystalview from './emilfaceviewcrystal.png';
import Faceview from './emilfaceview.png';

function Header() {
    return (
    <div className="Header">
        <div className="facewrapper">
            <img className="Faceview" src={Faceview} />
            <img className="Crystalview" src={Crystalview} />
        </div>
        <Navbar className="Navbar" />
    </div>
    );
}

export default Header;