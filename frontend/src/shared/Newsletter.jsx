import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to our newsletter</h2>
              <p>
                Get e-mail updates about our latest travel deals, special
                offers, and other news.
              </p>
              <div className="newsletter__input">
                <input type="text" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Stay informed with our newsletter and receive exclusive offers
                directly to your inbox. Join thousands of travelers who trust
                us to provide the best deals and updates for their next
                adventure.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="male tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
