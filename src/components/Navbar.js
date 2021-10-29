import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar_container">
            <Link to="/" className="nav_element">
                <i class="fas fa-home"></i>
                <span className='nav_text'>
                    home
                </span>
            </Link>
            <Link to="/projects" className="nav_element">
                <i class="fas fa-code"></i>
                <span className='nav_text'>
                    projects
                </span>
            </Link>
            <Link to="/contact" className="nav_element">
                <i class="fas fa-user"></i>
                <span className='nav_text'>
                    contact
                </span>
            </Link>
        </div>
    )
}

export default Navbar
