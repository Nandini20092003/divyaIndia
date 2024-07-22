import React from "react";
import HeritageSiteCard from "../../shared/HeritageSiteCard";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const HeritageSiteList = () => {
  const {
    data: heritageSites,
    loading,
    error,
  } = useFetch(`${BASE_URL}/heritageSites/search/getFeaturedHeritageSites`);

  return (
    <>
      {loading && <h4>Loading......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        heritageSites?.map((heritageSite) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={heritageSite._id}>
            <HeritageSiteCard heritageSite={heritageSite} />
          </Col>
        ))}
    </>
  );
};

export default HeritageSiteList;
