import React from "react";
import '../Services/Services.scss'
import { Link } from "react-router-dom";
import { 
    imago,
    navbar
} from "../Content";

const Services = () => {
  return (
    <div className="services">
      <div className="section">
        <div className="left">
          <img src={imago.img53} alt="shunnen" />{" "}
            <Link to="/Appointment">
                <button
                    className='btn'> 
                    {navbar.nav4}
                </button>
            </Link>
        </div>
        <div className="right">
          <h1>INTERIORS THAT REFLECT YOUR STYLE </h1>
          <p>
            Modeling & Remodeling your space at any given time, to suit your
            needs can be a tasking event. Moreover, the variety to choose from
            are endless with new designs each day. Well, you don't need to look
            further as we introduce ourselves to you, being one of the best when
            it comes to Interior Design in Nigeria, with our base in Port
            Harcourt, Rivers state. At Shunem Home Ideas, we give you the best
            designs with professionalism and at pocket-frienly prices too. In
            need of an Interior designer to handle the following, endeavor to
            call on us:
          </p>
            <ul>
                <li>📌Interior/Exterior design services</li>
                <li>📌Space management </li>
                <li>📌Home/commercial finishings</li>
                <li>📌General interior consultations</li>
                <li>📌Wall, floors and ceiling makeovers</li>
                <li>📌TV unit/console</li>
                <li>📌Wall papers</li>
                <li>📌Wall panels</li>
                <li>📌Sponge/foam panels</li>
                <li>📌Window blinds</li>
                <li>📌Artificial grass</li>
                <li>📌3D stretch ceilings</li>
                <li>📌Bricks stones</li>
                <li>📌5D wall murals</li>
                <li>📌Skirtings</li>
                <li>📌Stamped concrete</li>
                <li>📌Curtains</li>
                <li>📌Furnitures</li>
                <li>📌Interior ornaments</li>
                <li>📌Industrial cleaning</li>
                <li>📌Decorative painting and screeding</li>
                <li>📌Floor finishes </li>
            </ul>
            <p>
                We also operate an Interior and Exterior Decor Academy where we train our students on the effective discharge of services listed above.
                We are located at:
               
            </p> 
            <p>
                #1 New Road junction, 
                Opposite University of Port Harcourt, Choba. 
                Rivers State. 
            </p>
            <img src={imago.img44} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Services;
