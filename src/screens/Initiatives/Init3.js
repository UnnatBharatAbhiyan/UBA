import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/init3/image01.jpg";
import init_pic_2 from "../../Images/Initiatives/init3/image02.jpg";
import init_pic_3 from "../../Images/Initiatives/init3/image03.jpg";
import init_pic_4 from "../../Images/Initiatives/init3/image04.jpeg";
export const Init3 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3} i4={init_pic_4}
      title="VERMICOMPOSTING BED SETUP"
      date=" March 05, 2022"
      village=" Beladi"
        p1="Soils should be home to millions of beneficial bacteria and other microorganisms to make them healthy and for crops to yield well."

        p2="Vermicomposting is the process by which worms are used to convert organic materials (usually wastes) into a humus-like material known as vermicompost. Agriculture based only on chemical fertilisers and other chemical inputs is not desirable because constant use of such inputs causes soil infertility and affects productivity."

        p3="Identifying this problem in the village Beladi, Team Unnat Bharat Abhiyan, IIT Roorkee decided to implement vermicomposting. The team initiated the cause by bringing some worms and testing them in the laboratory of IIT Roorkee. The results were phenomenal, worms replicated and formed good compost. After analyzing the results, the team brought the worms from Organic Pura Ferm, a self-business in Unnav, and with the help of cattle dung from farmers successfully implemented the idea of vermicompost in the farms of Beladi."
      />
    </>
  )
}
