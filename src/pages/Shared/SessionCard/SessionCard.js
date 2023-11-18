import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./SessionCard.css";

const SessionCard = () => {
  return (
    <div>
      <div>
        <Card className="text-center w-50 mx-auto border-0 my-4 py-4">
          <Card.Body>
            <Card.Text className="fw-bolder text-muted">
              FEATURED WEB DEVELOPMENT COURSES
            </Card.Text>
            <Card.Title className="fs-2 fw-bolder">
              Explore Featured Courses and Enhance Your Skills
            </Card.Title>
            <Card.Text className="">
              Discover high-quality web development courses curated just for
              you. Stay ahead in the rapidly evolving field of web development.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="container d-flex flex-wrap justify-content-center my-cards-list">
        {/*-------------------- card 1 --------------- */}
        <Card style={{ width: "25rem" }} className="my-cards m-2 border-2">
          <Card.Img variant="top" src="https://i.postimg.cc/Px1PG0mW/react.png" />
          <Card.Body>
            <Card.Title>Master Frontend Development with React.js</Card.Title>
            <Card.Text>
              Learn the ins and outs of building modern user interfaces with
              React.js, the most popular frontend library.
            </Card.Text>
            <Button variant="primary">Enroll Now</Button>
          </Card.Body>
        </Card>
        {/*-------------------- card 2 --------------- */}
        <Card style={{ width: "25rem" }} className="my-cards m-2 border-2">
          <Card.Img variant="top" src="https://i.postimg.cc/tJy79D5L/node-mongo.webp" />
          <Card.Body>
            <Card.Title>
              Full Stack Web Development with Node.js and MongoDB
            </Card.Title>
            <Card.Text>
              Dive into full-stack development by mastering Node.js and MongoDB
              to build scalable and efficient web applications.
            </Card.Text>
            <Button variant="primary">Enroll Now</Button>
          </Card.Body>
        </Card>
        {/*-------------------- card 3 --------------- */}
        <Card style={{ width: "25rem" }} className="my-cards m-2 border-2">
          <Card.Img variant="top" src="https://i.postimg.cc/ZqGCMJyY/bootstrap-course.jpg" />
          <Card.Body>
            <Card.Title>Building Responsive Websites with Bootstrap</Card.Title>
            <Card.Text>
              Create beautiful and responsive websites using the Bootstrap
              framework. Perfect for beginners and experienced developers alike.
            </Card.Text>
            <Button variant="primary">Enroll Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SessionCard;
