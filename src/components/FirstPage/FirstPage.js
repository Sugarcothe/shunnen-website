import React from 'react';
import '../FirstPage/FirstPage.scss'

import {
    landingimage, 
    landingtext 
} from '../Content'

function FirstPage() {
    return (
        <div className='main'>
            <div className='section'>
                <div className='left'>
                    <img src={landingimage} alt='landing img'/>
                </div>
                <div className='right'>
                    <div className='firsttext'>
                        <h2>{landingtext.firsttext}</h2>
                        <p5>{landingtext.secondtext}</p5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
