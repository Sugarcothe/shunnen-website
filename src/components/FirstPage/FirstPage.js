import React from 'react';
import '../FirstPage/FirstPage.scss'

import {
    header,
    landingimage, 
    landingtext 
} from '../Content'

function FirstPage() {
    return (
        <div className='main'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
