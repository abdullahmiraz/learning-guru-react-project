import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseSummaryCard.css";
import { Badge } from "react-bootstrap";

const CourseSummaryCard = ({ course }) => {
  const { id, title, description, poster } = course;
  // console.log(course);
  return (
    <div>
      <Card className="my-4 mx-2 course-card" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={poster} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/course/${id}`}>
            <Badge pill bg="primary">
              Learn More{" "}
            </Badge>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummaryCard;
