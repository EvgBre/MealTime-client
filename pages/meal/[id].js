/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getMealFoods } from '../../api/mealFoodData';
import { getSingleMeal, deleteMeal } from '../../api/mealData';
import MealFoodCard from '../../components/MealFoodCard';
import MealFoodForm from '../../components/forms/MealFoodForm';

export default function ViewMeal() {
  const { user } = useAuth();
  const [mealDetails, setMealDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const [mealfoods, setMealFoods] = useState([]);

  const getThisMeal = () => {
    getSingleMeal(user.uid, id).then(setMealDetails);
  };
  const showMealsFoods = () => {
    getMealFoods(id).then(setMealFoods);
  };

  useEffect(() => {
    getThisMeal();
    showMealsFoods();
  }, [user, id]);

  const deleteThisMeal = () => {
    if (window.confirm(`Delete ${mealDetails.name} from your meals?`)) {
      deleteMeal(mealDetails.id);
    }
  };

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="mt-5 d-flex flex-wrap" style={{ width: 'auto' }}>
      <div
        className="text-black ms-5 details"
        style={{
          display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '500px',
        }}
      >
        <h5>
          {mealDetails?.name}
        </h5>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>Meal Date:</span> {mealDetails.dow}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>Meal Time:</span> {mealDetails.meal_time}
        </div>
        <div className="d-flex" style={{ width: '70%', justifyContent: 'space-between' }}>
          <Link href={`/meal/edit/${mealDetails.id}`} passHref>
            <Button className="m-2" style={{ height: '50px', width: '140px' }}>
              <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                Edit Meal
              </div>
            </Button>
          </Link>
          <Button onClick={deleteThisMeal} className="m-2" style={{ height: '50px', width: '140px' }}>
            Delete Meal
          </Button>
        </div>
      </div>
      <hr style={{ flexBasis: '100%', borderBottom: '1px solid black' }} />
      <Button variant="dark" type="button" size="lg" className="add-mealtime-mealfood-btn" onClick={handleClick}>
        + Add a Food
      </Button>
      <MealFoodForm onUpdate={showMealsFoods} show={show} handleClose={handleClose} />
      <div className="d-flex flex-wrap">
        {mealfoods.length === 0 ? (<p>No foods found</p>)
          : (mealfoods.map((mealfood) => (
            <MealFoodCard key={mealfood.id} mealFoodObj={mealfood} id={id} onUpdate={showMealsFoods} />
          )))}
      </div>
      {console.warn(mealfoods)}
    </div>
  );
}
