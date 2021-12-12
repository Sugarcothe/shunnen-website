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
                    <img src={imago.img28} alt="appointment"/>
                </div>

                <div className='row2'>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Phone</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="08012456789"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Reason For Appointment</label>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"> 
                            </textarea>
                        </div>
                            <input 
                                type="submit" 
                                value="Submit">

                            </input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Appointment
