/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { getFoodsByUser } from '../api/foodData';
import FoodCard from '../components/FoodCard';
import NewFood from '../components/NewFood';
import { useAuth } from '../utils/context/authContext';

export default function MyFood() {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  const getAllFood = () => {
    getFoodsByUser(user.uid).then(setFoods);
  };
  console.warn(foods);

  const [showFoodModal, setShowFoodModal] = useState(false);

  const handleClick = () => {
    setShowFoodModal(true);
  };

  const handleCloseBtn = () => {
    setShowFoodModal(false);
  };

  useEffect(() => {
    getFoodsByUser(user.uid).then(setFoods);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Head>
        <title>{user.first_name}&apos;s Food List</title>
      </Head>
      <Button variant="dark" type="button" size="lg" className="add-mealtime-food-btn" onClick={handleClick}>
        + Add Food
      </Button>
      <NewFood afterSubmit={getAllFood} show={showFoodModal} handleClose={handleCloseBtn} />
      <div className="text-center my-4">
        <div id="foodCards" className="d-flex flex-wrap">
          {foods.map((food) => (
            <FoodCard afterSubmit={getAllFood} key={food.id} foodObj={food} onUpdate={getAllFood} />
          ))}
        </div>
      </div>
    </>
  );
}
