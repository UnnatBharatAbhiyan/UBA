import IdentityCard from '../../components/Javascript/IdentityCard'
import { InitCard } from '../../components/Javascript/InitCard'
import { Images_sequence } from '../HomeScreen/Javascript/Images_sequence'
import bioenzyme from '../../Images/Initiatives/bioenzyme.jpg';
import SHG_wrkshp from '../../Images/Initiatives/Beladi/init7.jpg';
import vermi from '../../Images/Initiatives/Beladi/init8.jpg';
import director from '../../Images/patron/director.JPG'
import ups from '../../Images/patron/ups.png'
import ap from '../../Images/patron/Ap.jpeg'
import bhanu from '../../Images/patron/bhanu.jpg'
import Inspiration from './Javascript/Inspiration'
import { BsFillHeartFill } from 'react-icons/bs';
import { Work } from './Javascript/Work'
import "./css/App.css"
import About from './Javascript/About'
import './css/Carousel.css';
import ImageSlider from "./Javascript/Slider";
import FrontPageCarousel from "./Javascript/FrontPageCarousel";


export const HomeScreen = () => {


  return (
    <>

      <FrontPageCarousel/>
      <About />


      <div className="container">
        <section >
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            <h2>Our Recent <span>Initiatives </span></h2>
            <p>BrighInitCard <span className="underline">minds at work</span> here</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard image={bioenzyme} village="All Adopted villages |" date="Ongoing" init="Bioenzyme Workshop" initiative="Empowering villages with the power of bio enzymes." /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={SHG_wrkshp} village="Beladi | " date="August 20, 2022" init="SHG Formation Session" initiative="Unleashing the potential of women through Self-Help Groups." /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={vermi} village="Beladi | " date="March 05, 2022" init="Vermicomposting Bed Setup" initiative="Vermicompost bed was installed in a farm to produce organic fertilisers." /><br/>
              </center>
            </div>
          </div>
        </section>
      </div>
      <Work /><br/><br/>
      <h2><center>Our <b>Patrons</b></center></h2>
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
      </div>
      <div className="container">
        {/* <!--======= TITTLE =========--> */}
        <div className="tittle">
          <h2>Fresh From The <span>Blog</span></h2>
          <p>Work.  Innovation.  Fun.</p>
        </div>
        <div className="row mt-5 carousel-blog carousel">

          <ImageSlider />
        </div>
      </div>
      <Inspiration />
      {/* <!--======= PROUD =========--> */}
      <section ><br/>
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
      <br />
      </section>
    </>
  )
}

