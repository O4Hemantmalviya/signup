import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.webp";
import img1 from "./assets/img1.jfif";
import img4 from "./assets/img4.jpg";
import Card from "react-bootstrap/Card";
import { Button } from "bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <div className="searcheading">
            <h1>Find your next stay</h1>
            <h3>Search deals on hotels, homes, and much more...</h3>
          </div>
        </Col>
      </Row>
      <Row className="wheregoing">
        <Col sm={4}>
          <div>
            <input
              type="text"
              class="no-outline"
              placeholder="Where are you going ? "
              className="search"
            />
          </div>
        </Col>
        <Col sm={4}>
          <div>
            check in
            <input type="date" min="2020-01-01" max="2023-12-31" />
          </div>
        </Col>
        <Col sm={4}>
          <div>
            check out
            <input type="date" min="2020-01-01" max="2023-12-31" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <div>
            <Card style={{ width: "16rem" }}>
              <Card.Img className="img1" variant="top" src={img3} />
              <Card.Body>
                <button className="Detelisbtn">Book Hotel</button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <Card style={{ width: "16rem" }}>
              <Card.Img className="img1" variant="top" src={img4} />
              <Card.Body>
                <button className="Detelisbtn">Book Hotel</button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <Card style={{ width: "16rem" }}>
              <Card.Img className="img1" variant="top" src={img2} />
              <Card.Body>
                <button className="Detelisbtn">Book Hotel</button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <Card style={{ width: "16rem" }}>
              <Card.Img className="img1" variant="top" src={img1} />
              <Card.Body>
                <button className="Detelisbtn">Book Hotel</button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
