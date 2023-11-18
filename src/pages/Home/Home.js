import React from "react";
import Courses from "../Courses/Courses";
import SessionCard from "../Shared/SessionCard/SessionCard";
import { Col, Container, Row } from "react-bootstrap";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import TopCarousel from "../Shared/TopCarousel/TopCarousel";

const Home = () => {
  return (
    <div>
      <TopCarousel></TopCarousel>
      <Courses></Courses>
      <SessionCard></SessionCard>
    </div>
  );
};

export default Home;
