import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const LeftsideNav = () => {
  const courseList = useLoaderData();
  const { id, title } = courseList;
  console.log(courseList);
  return (
    <div className="my-4 d-none d-md-block" >
      {courseList.map((course) => (
        <p>
          <Link style={{ textDecoration: "none" }} to={`/course/${course.id}`}>
            {course.title}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftsideNav;
