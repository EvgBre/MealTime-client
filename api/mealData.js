import { clientCredentials } from '../utils/client';

const getMeals = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/meals`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleMeal = (uid, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/meals/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getMealsByUser = (userId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/meals?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createMeal = (meal, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/meals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(meal),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMeal = (meal, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/meals/${meal.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(meal),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMeal = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/meals/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getMeals,
  getSingleMeal,
  getMealsByUser,
  createMeal,
  updateMeal,
  deleteMeal,
};
