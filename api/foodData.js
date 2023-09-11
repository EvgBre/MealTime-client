import { clientCredentials } from '../utils/client';

const getFoods = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/foods`, {
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

const getSingleFood = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/foods/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getFoodsByUser = (userId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/foods?userId=${userId}`, {
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

const createFood = (food, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/foods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(food),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const updateFood = (food, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/foods/${food.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(food),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteFood = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/foods/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

const getFoodTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/food_types`, {})
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getFoods,
  getSingleFood,
  getFoodsByUser,
  createFood,
  updateFood,
  deleteFood,
  getFoodTypes,
};
