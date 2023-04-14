import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/init6/1.jpg";
import init_pic_2 from "../../Images/Initiatives/init6/2.jpg";
import init_pic_3 from "../../Images/Initiatives/init6/3.jpg";
export const Init6 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3}
      title="PUBLIC LIBRARY SETUP"
      date=" October 31, 2021"
      village=" Puranpur"
        p1="Books play a crucial role in student's life by introducing them to the world of imagination, providing knowledge, and enhancing their reading as well as writing skills. However, many of the students do not have access to books. Amidst the pandemic, Team UBA IIT Roorkee recognized this issue in the village Puranpur. Hence, the Team decided to set up a Public Library in the village so that the students could easily borrow the required books from the library when in need."

        p2="The team in collaboration with the Guzarish NGO, under their project Books For All, has set up the public library in Puranpur at Ambedkar Bhawan with around 450 books on different subjects from std 6 to 12."

        p3="The library was inaugurated in Puranpur in the presence of Ally Er Avinash Ohri (International President AACI), Dr Rajat Agarwal(Professor IIT Roorkee), and many other important AACI members on October 31, 2021.
        We hope this initiative of Team UBA, IITR would encourage the village students to expand their knowledge and instill a healthy reading habit in them."
      />
    </>
  )
}
