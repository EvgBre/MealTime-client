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

const createMealFood = async (mealId) => {
  const response = await fetch(`${clientCredentials.databaseURL}/foods/${mealId}/add`, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const foods = await response.json();
  return Object.values(foods);
};

const deleteMealFood = async (mealId) => {
  const response = await fetch(`${clientCredentials.databaseURL}/foods/${mealId}/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// const findFavorites = async (uid) => {
//   const products = await getAllProducts(uid);
//   const favorites = products.forEach((product) => {
//     if (getFavoriteProduct(product.id, uid) === true) {
//       console.warn(product);
//       favorites.push(product);
//     }
//   });
//   return favorites;
// };

export {
  getMealFoods,
  deleteMealFood,
  createMealFood,
};
