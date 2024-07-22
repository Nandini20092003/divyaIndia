import React from "react";
import ServiceCard from "./ServiceCard";
import { Container, Row, Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Plan your trips better with real-time weather updates. Stay informed about current weather conditions at your destination to ensure a comfortable and enjoyable journey.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Explore new places with confidence using our expert tour guides. Our guides are knowledgeable, friendly, and dedicated to providing you with memorable experiences and insightful information about each location.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your travel experience to match your preferences and interests. Whether you prefer adventurous activities, cultural immersion, or relaxation, we offer customizable packages to suit every traveler.",
  },
];

const ServiceList = () => {
  return (
    <Container>
      <Row>
        {servicesData.map((item, index) => (
          <Col lg="4" md="4" sm="12" className="mb-4" key={index}>
            <ServiceCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceList;
