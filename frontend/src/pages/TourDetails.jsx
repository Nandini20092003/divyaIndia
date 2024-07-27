import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  const { data: tour, loading, error, fetchData } = useFetch(`${BASE_URL}/tours/${id}`);

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour || {};
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  
    try {
      if (!user) {
        alert("Please login to add a review");
        return;
      }
  
      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating,
        productId: id,
        onModel: 'Tour',
      };
  
      const res = await fetch(`${BASE_URL}/review/tour/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
  
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
  
      alert(result.message);
      fetchData();
    } catch (err) {
      alert(err.message || "Failed to submit review");
    }
  };
    

  useEffect(() => {
    if (tour) {
      window.scrollTo(0, 0);
    }
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i className="ri-star-s-fill" style={{ color: "var(--secondary-color)" }}></i> 
                        {avgRating === 0 ? "Not Rated" : avgRating.toFixed(1)}
                        {totalRating === 0 ? "Not Rated" : <span>({reviews?.length} reviews)</span>}
                      </span>
                      <span>
                        <i className="ri-map-pin-user-fill"></i> {address} 
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line"></i> {city} 
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i> ₹{price} / per person 
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i> {distance} km
                      </span>
                      <span>
                        <i className="ri-group-line"></i> {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  <div className="tour__reviews mt-4">
                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item" key={review._id}>
                          <img src={avatar} alt="avatar" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(review.createdAt).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating} <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="tour__content">
                  <img src={photo} alt={title} className="tour__detailed-img--fixed" />
                  <div className="tour__reviews mt-4">
                    <h4>Reviews</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <span key={rating} onClick={() => setTourRating(rating)}>
                            {rating} <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>
                      <div className="review__input">
                        <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required />
                        <button className="btn primary__btn text-white" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
