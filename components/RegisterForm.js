import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  // set the state of the form input with blank or pre-set values
  const [formData, setFormData] = useState({
    uid: user.uid,
    firstName: '',
    lastName: '',
    email: '',
    diet: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />

        <Form.Label>Diet</Form.Label>
        <Form.Select
          aria-label="dietId"
          name="diet"
          onChange={handleChange}
          value={formData.diet}
        >
          <option value="">Select a Diet</option>
          <option value="1">Keto</option>
          <option value="2">Paleo</option>
          <option value="3">Vegan</option>
          <option value="4">Mediterranean</option>
          <option value="5">Low Carb</option>
          <option value="6">Gluten-Free</option>
          <option value="7">Vegetarian</option>
          <option value="8">Pescatarian</option>
          <option value="9">Whole30</option>
          <option value="10">Flexitarian</option>
        </Form.Select>
        <Form.Label>Profile Photo</Form.Label>
        <Form.Control type="url" placeholder="Profile Photo" name="photo" value={formData.photo} onChange={handleChange} required />

      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    diet: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
