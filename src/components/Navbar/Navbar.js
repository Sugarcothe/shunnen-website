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
                <Link to='/'>
                    <div className='logo'>
                        {title}
                    </div>
                </Link>
                <ul className='ulist'>
                    <li className='list'><Link to='/About'>{navbar.nav1}</Link></li>
                    <li className='list'><Link to='/Services'>{navbar.nav2}</Link></li>
                    <li className='list'><Link to='/Gallery'>{navbar.nav3}</Link></li>
                </ul>
                <Link to="/Appointment">
                    <button
                        className='btn'> 
                        {navbar.nav4}
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
