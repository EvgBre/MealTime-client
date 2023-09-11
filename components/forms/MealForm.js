/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
// import { Calendar } from 'primereact/calendar';
import { useAuth } from '../../utils/context/authContext';
import { createMeal, updateMeal } from '../../api/mealData';

const initialState = {
  name: '',
  mealTime: '',
  dow: '',
  grams: 0,
  userId: '',
};

export default function MealForm({ obj }) {
  const [currentMeal, setCurrentMeal] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  // const [date, setDate] = useState(null);

  useEffect(() => {
    if (obj.id) {
      setCurrentMeal({
        id: obj.id,
        name: obj.name,
        mealTime: obj.meal_time,
        grams: obj.grams,
        dow: obj.dow,
        userId: obj.user_id.id,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCurrentMeal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();
    if (obj.id) {
      const mealUpdate = {
        id: obj.id,
        name: currentMeal.name,
        grams: currentMeal.grams,
        mealTime: currentMeal.mealTime,
        dow: currentMeal.dow,
        userId: obj.user_id.id,
      };
      updateMeal(mealUpdate)
        .then(() => router.push('/meal/'));
    } else {
      const meal = {
        name: currentMeal.name,
        mealTime: currentMeal.mealTime,
        grams: currentMeal.grams,
        dow: currentMeal.dow,
        userId: user.id,
      };
      // Send POST request to your API
      createMeal(meal).then(() => router.push('/meal/'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentMeal.name} placeholder="What is the name of this meal?" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Meal</Form.Label>
          <Form.Select
            name="mealTime"
            required
            value={currentMeal.mealTime}
            placeholder="What meal of the day is this?"
            onChange={handleChange}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Choose when you are having this meal</Form.Label>
          <Form.Control
            name="dow"
            required
            value={currentMeal.dow}
            type="date"
            onChange={handleChange}
          />
          {/* <Calendar required value={date} onChange={(e) => setDate(e.value)} showIcon /> */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

MealForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    meal_time: PropTypes.string,
    grams: PropTypes.number,
    dow: PropTypes.string,
    user_id: PropTypes.object,
  }),
};

MealForm.defaultProps = {
  obj: initialState,
};
