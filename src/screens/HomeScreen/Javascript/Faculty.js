import IdentityCard from '../../../components/Javascript/IdentityCard';
import director from '../../../Images/patron/director.JPG';
import ups from '../../../Images/patron/ups.png';
import ap from '../../../Images/patron/Ap.jpeg';
import bhanu from '../../../Images/patron/bhanu.jpg';
import { BsFillHeartFill } from 'react-icons/bs';
import ".././css/App.css";
import '.././css/Carousel.css';

export const Faculty = () => {
    return (
        <>
        <br />
        <br />
        <h2 className='text-warning'><center>Our <b>Patrons</b></center></h2>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-5 my-2">
            <IdentityCard name="Prof. K. K. Pant"
              designation="Director, IIT Roorkee"
              image={director}
              link="https://www.iitr.ac.in/institute/pages/Director_IIT_Roorkee.html" />
          </div>
          <div className="col-md-5 my-2">
            <IdentityCard name="Prof. U.P. Singh"
              designation="Dy Director, IIT Roorkee"
              image={ups}
              link="https://www.iitr.ac.in/~CY/udaipfcy" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 my-2">
            <IdentityCard name="Dr.Bhanu Prakash Vellanki"
              designation="Co-ordinator, UBA IIT Roorkee"
              image={bhanu}
              link="https://civil.iitr.ac.in/CE?Uid=bhanufce" />
          </div>
          <div className="col-md-5 my-2">
            <IdentityCard name="Prof. Ashish Pandey"
              designation="Regional Cordinator, UBA"
              image={ap}
              link="https://www.iitr.ac.in/departments/WRT/pages/People+Faculty+ashisfwt.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br />
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
        <br />
        <br />
      </div>
        </>
    )
}
