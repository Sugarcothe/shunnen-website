import React from 'react';
import '../FirstPage/FirstPage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import {
    navbar
} from '../Content'

import {
    header,
    imago,
    landingimage, 
    landingtext 
} from '../Content' 
import Testimonials from './Testimonials';

function FirstPage() {
    

    return (
        <div className='main'>
            <div className='firstPage'>
                <div className='header'>
                    <h1>{header}</h1>
                </div>
                <div className='section'>
                    <div className='left'>
                        <img src={landingimage} alt='landing'/>
                    </div>
                    <div className='right'>
                        <div className='firsttext'>
                            <h2 className='big-text'>{landingtext.firsttext}</h2>
                            <p5 className='small-text'>{landingtext.secondtext}</p5>
                            <div>
                                <Link to="/Appointment">
                                    <button
                                        className='btn'> 
                                        {navbar.nav4}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='secondPage'>

                <div className='section'>
                    <div className='col-1'>
                        <img src={imago.img8} alt="shunnen"/>
                        <p>Interior/Exterior design services and Space Management </p>
                    </div>
                    <div className='col-1'>
                        <img src={imago.img16} alt="shunnen"/>
                        <p>We also operate an Interior and Exterior Decor Academy</p>
                    </div>
                    <div className='col-1'>
                        <img src={imago.img12} alt="shunnen"/>
                        <p>Modeling & Remodeling your space at any given time</p>
                    </div>
                   
                </div>
            </div>
            
            <div className='thirdPage'>
                <Testimonials/>
                <img src={imago.img22} alt="this"/>
            </div>
            
           
        </div>
    )
}

export default FirstPage
