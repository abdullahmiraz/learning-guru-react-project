import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../Shared/CourseSummaryCard/CourseSummaryCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import useTitle from "../../hooks/useTitle";

const Courses = () => {
  useTitle('Courses');
  const courseList = useLoaderData();
    // console.log(courseList);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="2">
            <LeftsideNav></LeftsideNav>
          </Col>
          <Col className="border-start" lg="10"> 
          {/* courses list container here  */}
            <div className="d-flex flex-wrap justify-content-center">
              {courseList.map((course) => (
                <CourseSummaryCard
                  key={course.id}
                  course={course}
                ></CourseSummaryCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
