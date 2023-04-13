import { InitCard } from '../../../components/Javascript/InitCard'
import "../../../components/Css/InitCard.css"
import food_kit from '../../../Images/Beladi/CycleDonation/covid.jpg'
import cycle_donation from '../../../Images/Beladi/CycleDonation/i.jpg'
import swacchta_hi_seva from '../../../Images/Chharba/PlasticFreeIndia_Chharba/i.jpeg'
import bioenzyme from '../../../Images/Initiatives/bioenzyme.jpg';
import SHG_wrkshp from '../../../Images/Initiatives/Beladi/init7.jpg';
import vermi from '../../../Images/Initiatives/Beladi/init8.jpg';
import e_lib from '../../../Images/Initiatives/Meerpur/init2.jpeg';
import water_filt from '../../../Images/Initiatives/Puranpur/init13.jpg';
import pub_lib from '../../../Images/Initiatives/Puranpur/init14.jpg';
import eco_brick from '../../../Images/Initiatives/Chharba/init15.jpeg';
import diya_stall from '../../../Images/Initiatives/Chandpur/init15.png';
import science_exp from '../../../Images/Initiatives/Chandpur/init16.jpg';
import comp_inst from '../../../Images/Initiatives/Beladi/init17.jpeg';
import lib from '../../../Images/Initiatives/Chharba/init18.jpg';

export const Initiative = () => {


  return (
    <>
    <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Our <span>Initiatives</span></h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Initiatives</li>
          </ol>
          </div>
          </div>
          </div>
      <div className="container">
      
        <section >
          {/* <!--======= TITTLE =========--> */}
          {/* <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard image={food_kit} village="All Adopted villages |" date="April 07, 2020" init="Food kit distribution" initiative="COVID19: Team UBA IIT Roorkee distributed food kits" /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={cycle_donation} village="Beladi |" date="October 12, 2019" init="Cycle Donation" initiative="Donating unused cycles at IITR to village students in Beladi." /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={swacchta_hi_seva} village="Chharba |" date="September 29, 2019" init="Swacchta Hi Seva" initiative="A step towards greener and cleaner India promoted through a campaign.." /><br/>
              </center>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard image={bioenzyme} village="All Adopted villages |" date="Ongoing" init="Bioenzyme Workshop" initiative="Empowering villages with the power of bio enzymes." go="/init1"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={SHG_wrkshp} village="Beladi | " date="August 20, 2022" init="SHG Formation Session" initiative="Unleashing the potential of women through Self-Help Groups." go="/init2"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={vermi} village="Beladi | " date="March 05, 2022" init="Vermicomposting Bed Setup" initiative="Vermicompost bed was installed in a farm to produce organic fertilisers." go="/init3"/><br/>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard image={e_lib} village="Meerpur | " date="January 20, 2022" init="E-Library SetUp" initiative="Initiative was to facilitate the students regarding various e-book resources available on e-library." go="/init4"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={water_filt} village="Puranpur | " date="January 16, 2022" init="Water filter" initiative="Water Purifier is installed in primary school of Puranpur." go="/init5"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={pub_lib} village="Puranpur | " date="October 31, 2021" init="Public library setup" initiative="Set up of a Public Library in the Puranpur village for the students at Ambedakar Bhawan with around 450 books on differnt subjects." go="/init6"/><br/>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard image={diya_stall} village="Chandpur | " date="October 30-31, 2021" init="SHG Diya Stall" initiative="On the eve of Diwali, Diya and handicrafts stall was set up at saraswati mandir, IIT Roorkee by SHG of Chandpur Village" go="/init7"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={eco_brick} village="Chharba | " date="30 October, 2021" init="Eco Bricks" initiative="Team Chharba, Unnat Bharat Abhiyan, brought forward the idea of tackling plastic waste by implementing the 'Eco-Bricks' initiative." go="/init8"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={science_exp} village="Chandpur | " date="October 28, 2021" init="Science Lab Kit Distribution" initiative="Science Workshop held at LHC, IIT Roorkee and about 25 teachers from different schools of Haridwar and Dehradun gathered." go="/init9"/><br/>
              </center>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-4">
              <center>
                <InitCard image={comp_inst} village="Beladi | " date="October 14, 2021" init="Computer Installation" initiative="Computer were installed in various schools to give them a better perspective and possibilities that will benefit them in the future." go="/init10" /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={lib} village="Chharba | " date="August 20, 2021" init="Library Setup" initiative=" Public Library was implemented at GIC, Chharba under the caretaking of Principal, GIC." go="/init11"/><br/>
              </center>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

