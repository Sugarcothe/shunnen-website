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
                <ul>
                    <li><a>{navbar.nav1}</a></li>
                    <li><a>{navbar.nav2}</a></li>
                    <li><a>{navbar.nav3}</a></li>
                    <li><a>{navbar.nav4}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
