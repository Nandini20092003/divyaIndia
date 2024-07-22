import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Working with this travel agency was an incredible experience. They
          took care of every detail, ensuring our trip was not only enjoyable
          but also hassle-free. The destinations they recommended were
          breathtaking, and we can't wait to book our next adventure with them!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="Customer Avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Shruti Patel</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Our family vacation organized by this travel agency was beyond our
          expectations. From the luxurious accommodations to the personalized
          itinerary, every aspect of our trip was meticulously planned. We
          created unforgettable memories together, thanks to their expertise.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="Customer Avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Vishnu Rao</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Traveling with this agency was a delight. They provided unparalleled
          service and made sure every moment of our trip was memorable. I highly
          recommend their services to anyone looking for a stress-free travel
          experience.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="Customer Avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Priya Sharma</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
