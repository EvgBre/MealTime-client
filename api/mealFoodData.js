import { clientCredentials } from '../utils/client';

const getMealFoods = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/foods?meal_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const foods = await response.json();
  return Object.values(foods);
};

const createMealFood = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/foods/${payload.foodId}/add`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newMealFood = await response.json();
  return newMealFood;
};

const deleteMealFood = async (id, mealId) => {
  const requestBody = JSON.stringify({ mealId });
  const response = await fetch(`${clientCredentials.databaseURL}/foods/${id}/remove`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  });
  const mealfood = await response;
  return mealfood;
};

export {
  getMealFoods,
  deleteMealFood,
  createMealFood,
};
