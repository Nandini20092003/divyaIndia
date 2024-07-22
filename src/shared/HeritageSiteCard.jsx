import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
// import calculateAvgRating from "../utils/avgRating";
import "./heritage-site-card.css";

const HeritageSiteCard = ({ heritageSite }) => {
  // const { _id, title, city, photo, featured, reviews, desc } = heritageSite;
  const { _id, title, city, photo, featured, desc } = heritageSite;

  // const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="heritage-site__card">
      <Card>
        <div className="heritage-site__img">
          <img
            src={photo}
            alt="heritage-site-img"
            className="heritage-site__img--fixed"
          />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="heritage-site__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            {/* <span className="heritage-site__rating d-flex align-items-center gap-1">
              <i className="ri-star-s-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span> */}
          </div>

          <h5 className="heritage-site__title">
            <Link to={`/heritageSite/${_id}`}>{title}</Link>
          </h5>
          <p className="heritage-site__desc">{desc.slice(0, 100)}...</p>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              {"Detailed"} <span> {"Info"} </span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/heritageSite/${_id}`}>Read More</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HeritageSiteCard;
