import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/Init11/1.jpeg";
import init_pic_2 from "../../Images/Initiatives/Init11/2.jpeg";
import init_pic_3 from "../../Images/Initiatives/Init11/3.jpeg";
import init_pic_4 from "../../Images/Initiatives/Init11/4.jpeg";
export const Init11 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3} i4={init_pic_4}
      title="LIBRARY SETUP"
      date=" August 20, 2021"
      village=" Chharba"
        p1="A Public Library was implemented at GIC, Chharba under the caretaking of Principal, GIC. More than 250 books were collected with the help of Goonj organisation which impacts more than 150 students of entire village"
      />
    </>
  )
}
