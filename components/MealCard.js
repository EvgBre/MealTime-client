/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deleteMeal } from '../api/mealData';

function MealCard({ mealObj, onUpdate }) {
  const deleteThisMeal = () => {
    if (window.confirm(`Delete ${mealObj.name} from your meals?`)) {
      deleteMeal(mealObj.id).then(() => onUpdate());
    }
  };
  const router = useRouter();
  const mealClick = () => {
    if (mealObj.id) {
      router.push(`/meal/${mealObj.id}`);
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title onClick={mealClick}>{mealObj.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{mealObj.meal_time}</Card.Subtitle>
        <Card.Text>
          {mealObj.dow}
        </Card.Text>
        <Button onClick={deleteThisMeal} className="delete-button m-2">
          Delete
        </Button>
        <Link href={`/meal/edit/${mealObj.id}`} passHref>Edit</Link>
      </Card.Body>
    </Card>
  );
}

MealCard.propTypes = {
  mealObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    grams: PropTypes.number,
    dow: PropTypes.string,
    meal_time: PropTypes.string,
    user_id: PropTypes.shape({
      uid: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MealCard;
