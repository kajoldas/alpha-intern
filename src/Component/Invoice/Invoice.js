import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from "./../../img/8(2).png";
import "./Invoice.css";

const Invoice = () => {
  return (
    <div className="background">
      

      <Container className="container">
      <h1>Thank you, <strong>Mushfiq Rahman</strong>  for your </h1>
      <h1>purchase</h1>
      <img style={{height:"300px"}} src={img} alt="img" />
        <Row>
          <Col lg={6} md={6} sm={6} className="order-details-start">
            <h1>Order Details</h1>
            <div className="flex">
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9
             GcQh1ll3m0jQlqn5qb_xvYBNoRXM09eyE-e8Mg&usqp=CAU"
                alt="img"
              />

              <div>
                <p>Software Quality Assurence(SQA) </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className="order-details-end">
            <h1>Order No #45</h1>
            <div>
              <h3>$4500</h3>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className="order-details-start">
            <div className="flex">
              <img
                className="img"
                src="https://image.shutterstock.com/image-photo/young-attractive-confident-successful-man-260nw-1355413967.jpg"
                alt="img"
              />
              <p>Software Quality Assurence(SQA)</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className="order-details-end">
            <div>
              <h3>$4500</h3>
            </div>
          </Col>
        </Row>

        {/* Vertial line */}
        <hr></hr>
        <Row>
          <Col lg={6} md={6} sm={6} className="order-details-start">
            <h4> Subtotal</h4>
            <h4> Vat</h4>
            <h4> Ports Pay</h4>
            <h4> Membership  Vulentry</h4>
          </Col>
          <Col lg={6} md={6} sm={6} className="order-details-end"> 
            <div>
              <h4>$9000</h4>
              <h4>$90</h4>
              <h4>$900</h4>
              <h4>$1200</h4>
            </div>
          </Col>
        </Row>

        <hr></hr>
        <Row>
        <Col lg={6} md={6} sm={6} className="order-details-start">
            <h4> Total</h4>
            <h4> Paid with</h4>
            <button className="back-button"> <i className="fas fa-arrow-left"></i> Back</button>
           
          </Col>
          <Col lg={6} md={6} sm={6} className="order-details-end">
          
              <h4>$6990</h4>
             
            <div className="master-card"> 
             <h4>Master Card </h4>
             <img
                className="card"
                src="https://flyclipart.com/thumb2/mastercard-icons-29734.png"
                alt="img"
              /> </div>
              <button className="download-button"> Download  <i className="fas fa-download"></i>   </button>
              
         
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Invoice;
