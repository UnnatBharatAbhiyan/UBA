import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Init_des } from '../../components/Javascript/Init_des'
import init_pic_1 from "../../Images/Initiatives/init4/image1.jpeg";
import init_pic_2 from "../../Images/Initiatives/init4/image2.jpeg";
import init_pic_3 from "../../Images/Initiatives/init4/image3.jpeg";
import init_pic_4 from "../../Images/Initiatives/init4/image4.jpeg";
export const Init4 = props => {
  return (
    <>
      <Init_des
      i1={init_pic_1} i2={init_pic_2} i3={init_pic_3} i4={init_pic_4}
      title="E-LIBRARY SET UP"
      date=" January 20, 2022"
      village=" Online"
        p1="The main objective of this initiative was to facilitate the students regarding various e-book resources available on e-library which could be very useful for them to fulfill their educational purposes. The students have shared the drive link of E-library which contains various textbooks such as NCERTs, competitive exams materials such as JEE, NEET etc. as well as various question papers of board exams that were uploaded in the pdf format. The e-books were collected by the UBA team members according to the student's needs."

        p2="The students were also guided on the benefits of these materials during such difficult times amidst the pandemic where the need of the hour is to learn online. The resources consisted of material useful for 1st to 8th standard students for their examinations."
      />
    </>
  )
}
