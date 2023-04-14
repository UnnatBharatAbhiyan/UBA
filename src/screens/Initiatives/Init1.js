import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/init1/bioenzyme1.jpg";
import init_pic_2 from "../../Images/Initiatives/init1/bioenzyme2.jpg";
import init_pic_3 from "../../Images/Initiatives/init1/image03.jpg";
import init_pic_4 from "../../Images/Initiatives/init1/image04.jpeg";
export const Init1 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3} i4={init_pic_4}
      title="BIOENZYME WORKSHOP"
      date=" Ongoing"
      village=" All villages"
        p1="Go natural and say no to chemicals! Looking at the impacts of climatic change in our daily life, there has been a shift towards sustainable and eco-friendly measures of production. While people face health issues due to personal consumption, disposal of such chemicals also leads to landfills, sewage blockage, etc which indirectly affects the environment. Bio-enzymes are natural cleaners produced by simple fermentation of fruits, vegetables, flowers, etc. As it is naturally made it has a good cleansing ability and doesn’t harm the environment."

        p2="Always striving for the upliftment of the Rural Economy along with sustainable and environment-friendly measures, Team UBA IIT Roorkee stepped in to deal with this issue. People in the villages were made aware of the harmful effects of using chemical surfactants as cleaners in our daily life, e.g., floor cleaners, handwash, etc, and were informed about the growing demand and need for natural cleansers in the marketplace and the ecological reasons behind them. As a result, they were motivated to set up a production unit for natural cleaners in the form of Bio-enzyme."

        p3="Training session on making Bio-enzyme for the SHG women of villages Puranpur and Beladi was organised under the guidance of Mrs Sameera Satija, a certified entrepreneur in waste management. Producing Bio-enzymes will also provide an employment opportunity to the women of SHG and help them enhance their living standards."
      />
    </>
  )
}
