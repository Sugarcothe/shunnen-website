import React from 'react';
import "../Navbar/Navbar.scss";
import {
    title,
    navbar
} from '../Content'

function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <div className='logo'>{title}</div>
                <ul className='ulist'>
                    <li className='list'><a href='#'>{navbar.nav1}</a></li>
                    <li className='list'><a href='#'>{navbar.nav2}</a></li>
                    <li className='list'><a href='#'>{navbar.nav3}</a></li>
                </ul>
                <button 
                    className='btn'>
                    {navbar.nav4}
                </button>
            </nav>
        </div>
    )
}

export default Navbar
