import React, { useState, useEffect } from "react";
import "../styles/heritageSite.css";
import CommonSection from "../shared/CommonSection";
import HeritageSiteCard from "../shared/HeritageSiteCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Col, Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const HeritageSites = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: heritageSites,
    loading,
    error,
  } = useFetch(`${BASE_URL}/heritageSites?page=${page}`);
  const { data: heritageSiteCount } = useFetch(
    `${BASE_URL}/heritageSites/search/getHeritageSiteCount`
  );

  useEffect(() => {
    const pages = Math.ceil(heritageSiteCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, heritageSiteCount, heritageSites]);

  return (
    <>
      <CommonSection title={"All Heritage Sites"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {heritageSites?.map((heritageSite) => (
                <Col
                  lg="3"
                  md="6"
                  sm="6"
                  className="mb-4"
                  key={heritageSite._id}
                >
                  <HeritageSiteCard heritageSite={heritageSite} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
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

export default HeritageSites;
