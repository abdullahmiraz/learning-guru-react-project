import React, { createContext, useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./CourseDetails.css";

export const CheckoutInfo = createContext();

const CourseDetails = () => {
  const courseInfo = useLoaderData();
  const { id, title, price, poster, description } = courseInfo;
   
  console.log("Course ID: ", id);
  return ( 
      <div className="w-100 course-details-card">
        <div>
          <Card style={{ width: "18rem" }}>
            <div className="bg-success py-3 text-center text-white fw-bold fs-5">
              Course ID: {id}
            </div>
            <Card.Img
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              className="border-1"
              variant="top"
              src={poster}
            />

            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link
                className="text-white"
                style={{ textDecoration: "none" }}
                to={{
                  pathname: `/course/buy/${id}`,
                  state: courseInfo
                }} 
              >
                <Button className="w-100">Buy Now ${price} </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div> 
  );
};

export default CourseDetails;
