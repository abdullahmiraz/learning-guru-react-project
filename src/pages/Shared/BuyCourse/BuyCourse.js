import React, { useContext } from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";

const BuyCourse = () => {
  const checkoutCourse = useLoaderData();
  const { id, title, price } = checkoutCourse;
  console.log(checkoutCourse);

  return (
    <div>
      <div className="text-center my-4">
        <h2>You are buying this course: </h2>
        <p>Course ID: {id}</p>
        <p>Course Name: {title}</p>
        <p>Course Price: {price}</p>
      </div>
    </div>
  );
};

export default BuyCourse;
