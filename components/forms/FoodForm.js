/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createFood, updateFood, getFoodTypes } from '../../api/foodData';

const initialState = {
  name: '',
  imageUrl: '',
  userId: '',
};

export default function FoodForm({ obj, handleClose, afterSubmit }) {
  const [foodTypes, setFoodTypes] = useState([]);
  /*
    Since the input fields are bound to the values of
    the properties of this state variable, you need to
    provide some default values.
    */
  const [currentFood, setCurrentFood] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentFood({
        id: obj.id,
        name: obj.name,
        foodType: obj.type,
        imageUrl: obj.image_url,
        userId: user.uid,
      });
    }
    console.log('obj:', obj);
    console.log('currentFood:', currentFood);
  }, [obj.id, user]);

  useEffect(() => {
    getFoodTypes().then(setFoodTypes);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentFood((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getFoodTypeId = (foodType) => {
    if (foodType === 'Protein') {
      return 1;
    }
    if (foodType === 'Carb') {
      return 2;
    }
    if (foodType === 'Fat') {
      return 3;
    }
    return null;
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();
    if (obj.id) {
      const foodUpdate = {
        id: currentFood.id,
        name: currentFood.name,
        foodType: getFoodTypeId(currentFood?.foodType),
        imageUrl: currentFood.imageUrl,
        userId: user.id,
      };
      console.log(foodUpdate);
      console.log('USER', user);
      updateFood(foodUpdate)
        .then(() => {
          afterSubmit();
          handleClose();
        });
    } else {
      const food = {
        name: currentFood.name,
        imageUrl: currentFood.imageUrl,
        foodType: currentFood.foodType,
        userId: user.id,
      };
      // Send POST request to your API
      createFood(food).then(() => {
        afterSubmit();
        handleClose();
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentFood.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control name="imageUrl" required value={currentFood.imageUrl} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Food Type</Form.Label>
          <Form.Select aria-label="foodtype" name="foodType" onChange={handleChange} required value={currentFood?.foodType?.label}>
            <option>Pick a Type</option>
            {
                foodTypes.map((type) => (
                  <option
                    key={type.id}
                    // value={type.id}
                  >
                    {type.label}
                  </option>
                ))
              }
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

FoodForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.object]),
  }),
  handleClose: PropTypes.func.isRequired,
  afterSubmit: PropTypes.func,
};

FoodForm.defaultProps = {
  obj: initialState,
  afterSubmit: () => {},
};
