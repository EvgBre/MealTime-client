import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getMealsByUser } from '../../api/mealData';
import MealCard from '../../components/MealCard';
import { useAuth } from '../../utils/context/authContext';

export default function MyMeals() {
  const { user } = useAuth();
  const [meals, setMeals] = useState([]);
  const router = useRouter();

  const handleClick = () => {
    router.push('/meal/new');
  };

  const getAllMeals = () => {
    getMealsByUser(user.uid).then(setMeals);
  };
  console.warn(meals);

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <>
      <Head>
        <title>My Meals</title>
      </Head>
      <Button variant="dark" type="button" size="lg" className="add-mealtime-meal-btn" onClick={handleClick}>
        + Add Meal
      </Button>
      <div className="text-center my-4">
        <div id="mealCards" className="d-flex flex-wrap">
          {meals.map((meal) => (
            <MealCard key={meal.id} mealObj={meal} onUpdate={getAllMeals} />
          ))}
        </div>
      </div>
    </>
  );
}
