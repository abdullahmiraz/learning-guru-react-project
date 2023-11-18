// Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Import a custom CSS file for styling
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Learning Guru</h5>
            <p>
              13/A, Sector 11, Uttara, <br />
              Dhaka, Bangladesh
            </p>
            <p>Email: info@learningguru.com</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Learning Guru</p>
        <span>Created by <Link to={`https://abdullahmiraz.github.io/`}>Abdullah Miraz</Link></span>
      </div>
    </footer>
  );
};

export default Footer;
