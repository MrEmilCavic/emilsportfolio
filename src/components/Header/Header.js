import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import './Header.css';
import Crystalview from './emilfaceviewcrystal.png';
import Faceview from './emilfaceview.png';
import Mobilemenu from '../util/mobilemenu.png';

function Header() {
    const [windowSize, setWindowSize ] = useState(window.innerWidth);
    const [mobileMenu, showMobileMenu ] = useState(false);
    const refMenu = useRef();

    useEffect (() => {
        const whenResize = () => {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', whenResize);
        window.removeEventListener('resize', whenResize);
    });

    useEffect(() => {
        if(windowSize < 768) {
            const closeMenu = (e) => {
                if (!refMenu.current.contains(e.target)) {
                showMobileMenu(false);
                }
            }
            document.body.addEventListener("click", closeMenu)
            document.body.addEventListener("touchstart", closeMenu);
            return () => {
                document.body.removeEventListener("click", closeMenu)
                document.body.removeEventListener("touchstart", closeMenu);
            }
        }
        },[]);

    return (
    <div className="Header">
        <div className="facewrapper">
            <img className="Faceview" src={Faceview} />
            <img className="Crystalview" src={Crystalview} />
        </div>
        {
            windowSize < 768 ? <img className="Mobilemenu" ref={refMenu}
                                src={Mobilemenu} onClick={() =>showMobileMenu(!mobileMenu)} /> :
             <Navbar/>       
        }
        {
            mobileMenu && <Navbar />
        }
    </div>
    );
}

export default Header;