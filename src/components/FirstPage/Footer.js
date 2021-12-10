import React from 'react'
import Footer from './Footer.scss'
import { 
    imago,
    title 
} from '../Content'

function Rooter() {
    return (
        <div className='footer'>
            <div className='section'>
                <div className='col1'>
                    <div className='logo'>
                        <img src={imago.img26} alt='imago' />
                    </div>
                    <div className='text'>
                        <p>{title}</p>
                    </div>
                </div>
                <div className='col1'>
                    
                </div>
                <div className='col1'>
                    
                </div>
            </div>
        </div>
    )
}

export default Rooter
