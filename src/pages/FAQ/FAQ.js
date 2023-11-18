import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FAQ = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mb-4">
          {/* FAQ 1: How can I purchase a course on your platform? */}
          <Card id="faq-1" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">How can I purchase a course on your platform?</Card.Title>
              <Card.Text>
                To purchase a course, navigate to the course page and click on the "Enroll Now" or "Purchase" button. Follow the on-screen instructions to complete the payment process. Once the payment is successful, you'll have access to the course materials.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* FAQ 2: Can I access the purchased courses on multiple devices? */}
          <Card id="faq-2" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">Can I access the purchased courses on multiple devices?</Card.Title>
              <Card.Text>
                Yes, you can access your purchased courses on multiple devices. Simply log in to your account on any device, and you'll have access to the courses you've enrolled in.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* FAQ 3: What payment methods are accepted on your platform? */}
          <Card id="faq-3" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">What payment methods are accepted on your platform?</Card.Title>
              <Card.Text>
                We accept a variety of payment methods, including credit/debit cards and popular online payment gateways. During the checkout process, you'll see the available payment options for your convenience.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* FAQ 4: Are there any discounts or promotions available for courses? */}
          <Card id="faq-4" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">Are there any discounts or promotions available for courses?</Card.Title>
              <Card.Text>
                We regularly offer discounts and promotions on selected courses. Keep an eye on our website, newsletters, and social media channels for announcements about special deals and promotions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar with additional information, tags, etc. */}
        <Col md={4}>
          <Card className="sticky-top">
            <Card.Body>
              <Card.Title className="text-primary">Frequently Asked Questions</Card.Title>
              <Card.Text>
                <a href="#faq-1">How can I purchase a course?</a>
              </Card.Text>
              <Card.Text>
                <a href="#faq-2">Can I access courses on multiple devices?</a>
              </Card.Text>
              <Card.Text>
                <a href="#faq-3">What payment methods are accepted?</a>
              </Card.Text>
              <Card.Text>
                <a href="#faq-4">Are there any discounts for courses?</a>
              </Card.Text>
              {/* Add more FAQ items or other relevant information */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
