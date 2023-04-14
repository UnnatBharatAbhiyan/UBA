import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Css/InitCard.css";
export const Init_des = (props) => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <div className="position-relative">
                        {/* Images */}
                        <div className="row justify-content-evenly">
                            <img src={props.i1} alt="placeholder" className="col-lg-2 my-2" />
                            <img src={props.i2} alt="placeholder" className="col-lg-2  my-2" />
                            <img src={props.i3} alt="placeholder" className="col-lg-2 my-2" />
                            <img src={props.i4} alt="placeholder" className="col-lg-2 my-2" />
                        </div>

                        {/* Text */}
                        <div className="text-left py-5">
                            <h1  id="Init_title" className="text-center">{props.title}</h1> <br/>
                            <p>Date:{props.date}</p><p>Village:{props.village}</p>
                            <p>{props.extra}</p>
                                <p>{props.p1}<br /><br />

                                {props.p2}<br />
                                <br />
                                {props.p3}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
