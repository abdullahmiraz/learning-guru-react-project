import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "User name");
  const photoURLRef = useRef(user?.photoURL || "Photo URL");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div style={{ margin: "3rem auto" }}>
        {user.photoURL ? (
            <img
            className="rounded mx-auto"
            src={user.photoURL}
            alt="user"
            />
            ) : (
                <FaUser className="rounded" size={100} />
                )}
                <h3 className="text-center mt-4 text-success">User Profile: {name}</h3>
      </div>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: "25rem", margin: "3rem auto" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            readOnly
            defaultValue={user?.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name </Form.Label>
          <Form.Control
            onChange={handleNameChange}
            defaultValue={name}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL </Form.Label>
          <Form.Control
            ref={photoURLRef}
            defaultValue={user?.photoURL}
            type="text"
            placeholder="PHotoURL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Info
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
