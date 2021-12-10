import React from 'react';
import Slider from "react-slick";
import '../FirstPage/Testimonials.scss'

function Testimonials() {

    var settings = {
        fade: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
      };

    return (
        
        <div className='test'>
        <Slider {...settings}>
            <div className='testimonial'>
                <p className='message'>"Shunnen Home Ideas pays close attention to details, bringing quality decor items right to your door"</p>
                <h4 className='name'>Hassan</h4>
                <p className='state'>Calabar</p>
            </div>
            <div className='testimonial'>
                <p className='message'>"We have had an extremely enjoyable journey with Shunnen Home Ideas"</p>
                <h4 className='name'>Gloria</h4>
                <p className='state'>PortHarcourt</p>
            </div>
            <div className='testimonial'>
                <p className='message'>"Shunem Home Ideas helped us with everything we needed – the furniture for the living room, dining room and the family room, the chandelier, curtains and window coverings, etc."</p>
                <h4 className='name'>Adebola</h4>
                <p className='state'>Portharcourt</p>
            </div>
            <div className='testimonial'>
                <p className='message'>"Shunem Home Ideas is a delight to work with. She has great ideas and her team executes flawlessly. Every supplier she has used on our home has been exceptional"</p>
                <h4 className='name'>Jude</h4>
                <p className='state'>Lagos</p>
            </div>
            </Slider>
        </div>
    )
}

export default Testimonials
