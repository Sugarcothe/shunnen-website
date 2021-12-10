import React from 'react'
import Footer from './Footer.scss'
import { 
    imago,
    title,
    socials
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
                    <div className='address'>
                        <i class="fas fa-map-marked-alt"></i><br/>
                        N01 New Road, Junction,<br />
                        Opposite University of Portharcourt,<br />
                        Rivers State.
                    </div>
                </div>


                <div className='col2'>
                    <p>📌Interior/Exterior design services</p>
                    <p>📌Home/commercial finishings</p>
                    <p>📌General interior consultations</p>
                    <p>📌TV unit/console</p>
                    <p>📌Decorative painting and screeding</p>
                    <p>📌Floor finishes</p>
                    <p>📌Kitchen units</p>
                    <p>📌3D Wall Murals</p>
                    <p>📌5D wall murals</p>
                    <p>📌Window blinds</p>
                    <p>📌Bricks stones</p>
                    <p>📌Artificial grass</p>
                    <p>📌Stamped concrete,</p>
                </div>

                <div className='col3'>
                    <p><i class="fas fa-phone-volume"></i>: {socials.phone}</p>
                    <p><i class="fas fa-envelope-square"></i>: {socials.emails}</p>
                    
                    <div className='socials'>
                        <h4>Socials</h4>
                        <div className='icons'>
                            <div className='whatsapp'><a href={socials.whatsapp}><i class="fab fa-whatsapp"></i></a></div>
                            <div className='facebook'><a href={socials.facebook}><i class="fab fa-facebook-square"></i></a></div>
                            <div className='instagram'><a href={socials.instagram}><i class="fab fa-instagram"></i></a></div>
                            <div className='twitter'><a href={socials.twitter}><i class="fab fa-whatsapp"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooter
