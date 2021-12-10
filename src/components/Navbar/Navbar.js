import React from 'react';
import "../Navbar/Navbar.scss";
import {
    title,
    navbar
} from '../Content'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <div className='logo'>
                    <Link to='/'>
                        {title}
                    </Link>
                </div>
                <ul className='ulist'>
                    <li className='list'><Link to='/About'>{navbar.nav1}</Link></li>
                    <li className='list'><Link to='/Services'>{navbar.nav2}</Link></li>
                    <li className='list'><Link to='/Gallery'>{navbar.nav3}</Link></li>
                </ul>
                <button 
                    className='btn'> 
                    <Link to="/Appointment">
                        {navbar.nav4}
                    </Link>
                </button>
            </nav>
        </div>
    )
}

export default Navbar
