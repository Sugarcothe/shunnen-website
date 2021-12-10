import React from 'react'
import { imago } from '../Content'
import '../Appointment/Appointment.scss'

const Appointment = () => {
    return (
        <div className='appointment'>
            <div className='header'>
                <h1>Book Appointment With Us</h1>
            </div>
            
            <div className='section'>
                <div className='row1'>
                    <img src={imago.img27} alt="appointment"/>
                </div>
                <div className='row2'>

                </div>
            </div>
        </div>
    )
}

export default Appointment
