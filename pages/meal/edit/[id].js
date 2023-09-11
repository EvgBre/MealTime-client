import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleMeal } from '../../../api/mealData';
import MealForm from '../../../components/forms/MealForm';

export default function EditMeal() {
  const [editMeal, setEditMeal] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleMeal(id).then(setEditMeal);
  }, [id]);

  return (
    <div>
      <h1>Edit Meal</h1>
      <MealForm obj={editMeal} />
    </div>
  );
}
