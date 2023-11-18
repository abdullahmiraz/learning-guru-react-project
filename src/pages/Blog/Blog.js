import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mb-4">
          {/* Blog Post 1: What is CORS? */}
          <Card id="blog-post-1" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">What is CORS?</Card.Title>
              <Card.Text>
                Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the original web page.
              </Card.Text>
              <Card.Text>
                CORS is important in ensuring the security of web applications by preventing unauthorized access to resources on different domains. It is enforced by browsers and involves the server including specific headers in its response to indicate which origins are permitted to access the resources.
              </Card.Text>
              <Card.Text>
                In simple terms, CORS is a set of rules that determine how a web page on one domain can request and interact with resources on another domain.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Blog Post 2: Why are you using Firebase for authentication? */}
          <Card id="blog-post-2" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">Why are you using Firebase? What other options do you have to implement authentication?</Card.Title>
              <Card.Text>
                Firebase provides a comprehensive authentication system that is easy to integrate into web applications. It offers secure and scalable authentication solutions, including email/password, social logins, and more.
              </Card.Text>
              <Card.Text>
                Other options for authentication include using traditional server-side authentication with technologies like Passport.js or implementing authentication through identity providers such as Auth0.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Blog Post 3: How does the private route work? */}
          <Card id="blog-post-3" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">How does the private route work?</Card.Title>
              <Card.Text>
                A private route is a mechanism in web applications to restrict access to certain routes based on the user's authentication status. In React, this is often achieved by creating a higher-order component (HOC) or using the `render` method of the `Route` component in a router library like React Router.
              </Card.Text>
              <Card.Text>
                The private route checks whether the user is authenticated. If authenticated, it allows access to the protected route; otherwise, it redirects the user to the login page or another appropriate action.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Blog Post 4: What is Node? How does Node work? */}
          <Card id="blog-post-4" className="mb-4">
            <Card.Body>
              <Card.Title className="text-primary">What is Node? How does Node work?</Card.Title>
              <Card.Text>
                Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling the development of scalable and high-performance web applications.
              </Card.Text>
              <Card.Text>
                Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. It is well-suited for building real-time applications, APIs, and microservices. Node.js has a large ecosystem of packages and modules available through npm (Node Package Manager).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar with additional information, tags, etc. */}
        <Col md={4}>
          <Card className="sticky-top">
            <Card.Body>
              <Card.Title className="text-primary">Recent Posts</Card.Title>
              <Card.Text>
                <a href="#blog-post-1">What is CORS?</a>
              </Card.Text>
              <Card.Text>
                <a href="#blog-post-2">Why Firebase for Authentication?</a>
              </Card.Text>
              <Card.Text>
                <a href="#blog-post-3">How does the Private Route work?</a>
              </Card.Text>
              <Card.Text>
                <a href="#blog-post-4">What is Node?</a>
              </Card.Text>
              {/* Add more recent posts or other relevant information */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
