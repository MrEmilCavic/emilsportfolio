import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Navbar;