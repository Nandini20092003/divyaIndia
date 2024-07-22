import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/home-hero-img01.jfif";
import heroImg02 from "../assets/images/home-hero-img02.jfif";
import heroVideo from "../assets/images/home-hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
// import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/Home-ServiceList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import HeritageSiteList from "../components/Heritage-sites/HeritageSiteList";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="home-hero__content">
                <div className="home-hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Journey through the{" "}
                  <span className="home-highlight">Timeless Beauty</span> of
                  India's Monuments
                </h1>
                <p>
                  Explore the rich history and culture of India through its
                  magnificent monuments and heritage sites. From ancient temples
                  to grand forts, each site tells a unique story of the past.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="home-hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="home-hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="home-hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="home-services__subtitle">Our Services</h5>
              <h2 className="home-services__title">
                We Offer the Best Experiences
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="home-mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="home-featured__tour-title">
                Featured Heritage Sites
              </h2>
            </Col>
            <HeritageSiteList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="home-experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With Our Vast Experience, <br /> We Guide You Through History
                </h2>
                <p>
                  Discover the stories behind India's most iconic heritage
                  sites. Our experienced guides provide in-depth knowledge and
                  engaging narratives to bring history to life.
                </p>
              </div>
              <div className="home-counter__wrapper d-flex align-items-center gap-5">
                <div className="home-counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="home-counter__box">
                  <span>2k+</span>
                  <h6>Regular client</h6>
                </div>
                <div className="home-counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="home-experience__img">
                <img src={experienceImg} alt="experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="home-gallery__title">
                Explore Our Gallery of Monumental Wonders
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonials"} />
              <h2 className="home-testimonials__title">
                Hear What Our Guests Have to Say
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
