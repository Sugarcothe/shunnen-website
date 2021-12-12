import React from 'react';
import { imago } from '../Content';
import "../Gallery/Gallery.scss"

function Gallery() {
    return (
        <div className='gallery'>
           <div className='section'>
                <div className='col'>
                    <img src={imago.img20} alt="pictures"/>
                </div>
           </div>
        </div>
    )
}

export default Gallery
