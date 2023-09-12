/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteMealFood } from '../api/mealFoodData';

export default function MealFoodCard({ mealFoodObj, onUpdate }) {
  const removeMealFood = () => {
    if (window.confirm(`Remove ${mealFoodObj.name} from this meal?`)) {
      deleteMealFood(mealFoodObj.meal_id).then(() => onUpdate());
    }
  };
  console.warn(mealFoodObj);
  return (
    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Header>{mealFoodObj.type.label}</Card.Header>
      <Card.Body>
        <Card.Title>{mealFoodObj.name}</Card.Title>
        <Card.Text>
          Some quick example text
        </Card.Text>
        <Button onClick={removeMealFood} className="delete-button m-2">
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

MealFoodCard.propTypes = {
  mealFoodObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.object,
    meal_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    grams: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
