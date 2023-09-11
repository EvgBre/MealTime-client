import Head from 'next/head';
import React from 'react';
import MealForm from '../../components/forms/MealForm';

export default function AddMeal() {
  return (
    <>
      <Head>
        <title>Create New Meal</title>
      </Head>
      <MealForm />
    </>
  );
}
