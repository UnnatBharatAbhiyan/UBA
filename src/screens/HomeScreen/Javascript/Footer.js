import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faFacebook,
//   faInstagram,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css"
export const Footer = () => {
  return (
    <footer id="footer_cont" className=" pt-5 mt-5">
      <Container>
        <Row className="justify-content=evenly">
          <Col sm={6} md={3} className="col-me">
            <h5 id="footer_title">Contact Us</h5>
            <p>Address : Unnat Bharat Abhiyan, IIT Roorkee, Uttarakhand</p>
            <p>Phone : (+91) 8318450052</p>
            <p>Email : uba@iitr.ac.in</p>
            <button className="btn-footer"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe_11g8yI5lAlS4o_xix6cp41RATF9-YGiYqAS2GZiC15NnYg/viewform">Sign up for Emails</a>
            </button>
          </Col>
          <Col sm={6} md={3} className="col-me">
            <h5 id="footer_title">USEFUL LINKS</h5>
            <ul>
              <p><a href="/">IIT Roorkee</a></p>
              <p><a href="/">UBA, IIT Delhi</a></p>
              <p><a href="/">Faculty</a></p>
              <p><a href="/">Student Team</a></p>
              <p><a href="/">Action Plan</a></p>
              <p><a href="/">Contact Us</a></p>
            </ul>
          </Col>
          <Col sm={6} md={3} className="col-me">
            <h5 id="footer_title">RECENT EVENTS</h5>
            <p>On the eve of 75th Independence Day, Team UBA IITR brings one-of-its-kind talk by Mr. Swapnil Tewari on topic- 'O Yuva!-Unleash your superpower.'</p>
            <p><a id="yuva" href="https://www.facebook.com/700887566729461/posts/2044083149076556/">www.facebook.com/OYuva.ubaiitr/</a></p>
          </Col>
          <Col sm={6} md={3} className="col-me">
            <h5 id="footer_title">IITR SOCIAL MEDIA
</h5>
            <ul>
              <p>
                <a href="https://twitter.com">
                  Twitter
                </a>
              </p>
              <p>
                <a href="https://facebook.com">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://instagram.com">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://youtube.com">
                  Youtube
                </a>
              </p>
            </ul>
          </Col>
        </Row>
      </Container>
      <Col xs={12} className="bottom-bar">
            <p className="text-center">
            WEBSITE DEVELOPED BY UBA IITR WITH ❤️
            </p>
            <p className="text-center">
            COPYRIGHT © 2015 SOCIAL WELFARE. ALL RIGHTS RESERVED.
            </p>
          </Col>
    </footer>
  );
};
