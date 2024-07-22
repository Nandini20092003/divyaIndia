import React from "react";
import ServiceCard from "./ServiceCard";
import { Container, Row, Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Heritage",
    desc: "Heritage means what we inherit from our ancestors and from our past. India is a land of varied cultures and traditions..",
  },
  {
    imgUrl: guideImg,
    title: "Geography",
    desc: "Monuments can also be found in a variety of natural and man-made environments, including deserts, forests, mountains, and bodies of water.",
  },
  {
    imgUrl: customizationImg,
    title: "History",
    desc: "The history of monuments is complex and varied, reflecting the diverse cultural and historical contexts in which they were created.",
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
