import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./heritage-site-card.css";

const HeritageSiteCard = ({ heritageSite }) => {
  const { _id, title, city, photo, desc } = heritageSite;

  return (
    <div className="heritage-site__card">
      <Card>
        <div className="heritage-site__img">
          <img
            src={photo}
            alt="heritage-site-img"
            className="heritage-site__img--fixed"
          />
          {/* Display featured tag if necessary */}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="heritage-site__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
          </div>

          <h5 className="heritage-site__title">
            <Link to={`/heritageSites/${_id}`}>{title}</Link>
          </h5>
          <p className="heritage-site__desc">{desc.slice(0, 100)}...</p>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <button className="btn booking__btn">
              <Link to={`/heritageSites/${_id}`}>Read More</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HeritageSiteCard;
