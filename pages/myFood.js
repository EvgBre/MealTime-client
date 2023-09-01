/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getFoods } from '../api/foodData';
import FoodCard from '../components/foodCard';
import { useAuth } from '../utils/context/authContext';

export default function MyFood() {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  const getAllFood = () => {
    getFoods(user.uid).then(setFoods);
  };
  console.warn(foods);

  useEffect(() => {
    document.title = 'Meal Time';
    getAllFood();
  }, []);

  return (
    <>
      <Head>
        <title>My List</title>
      </Head>
      <div className="text-center my-4">
        <div id="foodCards" className="d-flex flex-wrap">
          {foods.map((food) => (
            <FoodCard key={food.id} foodObj={food} onUpdate={getAllFood} />
          ))}
        </div>
      </div>
    </>
  );
}
