import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/Init7/image1.png";
import init_pic_2 from "../../Images/Initiatives/Init7/image2.png";
import init_pic_3 from "../../Images/Initiatives/Init7/image3.png";
import init_pic_4 from "../../Images/Initiatives/Init7/image4.png";
export const Init7 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3} i4={init_pic_4}
      title="SHG DIYA AND HANDICRAFTS STALL"
      date="  October 30-31, 2021"
      village=" Saraswati Mandir, IIT Roorkee"
        p1="'There is no tool for development more effective than the empowerment of women.' ~Kofi Annan"

        p2="With the aim of empowering the SHG women members as well as promoting a cleaner and sustainable way of celebrating Diwali, Unnant Bharat Abhiyan, IIT Roorkee, worked on the “Diya and Handicraft Making and Selling” Initiative.

        Today, in India, Self Help Groups (SHGs) represent a unique approach to financial intermediation and socio-economic empowerment of women. SHGs are the major source of inspiration for new generation women’s welfare. The SHGs are characterized by focused attention on providing employment opportunities by imparting training to generate income and employment. The team identified the enthusiastic Self Help Groups women members ( in villages Chandpur- Horawala) interested in working for the same and provided them with a two-day training with the help of SHG Adhyaksh. Around 15 SHG members came forward and joined the hands together for making diyas and eye-catching handicrafts."

        p3="With the kind support of the IIT Roorkee administration, the team welcomed the SHG members to set up their stall inside the campus for two days and provided them with accommodation facilities as well. The women were extremely delighted to get this opportunity. They earned a considerable amount of profit with a total sale of around ₹ 10,000 which encouraged them to set up the stalls at other places as well. By effectively ensuring social and economic betterment of rural women through this initiative, Team UBA continuously strives to create a positive impact in the society.

        "
      />
    </>
  )
}
