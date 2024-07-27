import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import Travel from "../pages/Travel";
import ThankYou from "../pages/ThankYou";
import HeritageSiteDetails from "../pages/HeritageSiteDetails";  
import HeritageSites from "../pages/HeritageSites";
import Quiz from "../components/Quiz/Quiz";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/heritageSites" element={<HeritageSites />} />
      <Route path="/heritageSites/:id" element={<HeritageSiteDetails />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default Routers;
