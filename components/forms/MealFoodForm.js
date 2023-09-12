import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getFoodsByUser } from '../../api/foodData';
import { createMealFood } from '../../api/mealFoodData';

const initialState = {
  food_id: '',
  grams: 0,
};

export default function MealFoodForm({ onUpdate, obj }) {
  const [foods, setFoods] = useState([]);
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  useEffect(() => {
    getFoodsByUser(user.uid).then(setFoods);
  }, [obj, user]);

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const food = {
      name: formInput.name,
      grams: formInput.grams,
    };
      // Send POST request to your API
    createMealFood(food).then(() => {
      onUpdate();
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add a Food Item to this Meal!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Food Select</Form.Label>
              <Form.Select
                aria-label="Food"
                name="food_id"
                onChange={handleChange}
                className="mb-3"
                value={obj.food_id}
                required
              >
                <option value="">Select a Food</option>
                {
            foods.map((food) => (
              <option
                key={food.id}
                value={food.id}
              >
                {food.name}
              </option>
            ))
          }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>How many grams of this food are you having?</Form.Label>
              <Form.Control
                name="grams"
                required
                value={formInput.grams}
                type="number"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>

        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

MealFoodForm.propTypes = {
  obj: PropTypes.shape({
    food_id: PropTypes.string,
    grams: PropTypes.number,
  }),
  onUpdate: PropTypes.func,
};

MealFoodForm.defaultProps = {
  obj: initialState,
  onUpdate: () => {},
};
