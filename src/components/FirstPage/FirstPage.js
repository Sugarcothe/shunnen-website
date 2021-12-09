import React from 'react';
import '../FirstPage/FirstPage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
                        <img src={landingimage} alt='landing img'/>
                    </div>
                    <div className='right'>
                        <div className='firsttext'>
                            <h2 className='big-text'>{landingtext.firsttext}</h2>
                            <p5 className='small-text'>{landingtext.secondtext}</p5>
                            <div>
                                <button 
                                    className='btn'>
                                    {navbar.nav4}
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='secondPage'>

                <div className='section'>
                    <div className='col-1'>
                        <img src={imago.img8} alt="image"/>
                        <p>Interior/Exterior design services and Space Management </p>
                    </div>
                    <div className='col-1'>
                        <img src={imago.img16} alt="image"/>
                        <p>We also operate an Interior and Exterior Decor Academy</p>
                    </div>
                    <div className='col-1'>
                        <img src={imago.img12} alt="image"/>
                        <p>Modeling & Remodeling your space at any given time</p>
                    </div>
                   
                </div>
            </div>

            <Testimonials/>
        </div>
    )
}

export default FirstPage
