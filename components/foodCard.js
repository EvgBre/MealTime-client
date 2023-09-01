/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteFood } from '../api/foodData';

function FoodCard({ foodObj, onUpdate }) {
  const deleteThisFood = () => {
    if (window.confirm(`Delete ${foodObj.name}?`)) {
      deleteFood(foodObj.user_id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={foodObj.image_url} alt={foodObj.name} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>{foodObj.name}</Card.Title>
        <p className="card-text bold">{foodObj.type.label}</p>
        <Link href={`/food/edit/${foodObj.id}`} passHref>
          <Button className="edit-button">Edit</Button>
        </Link>
        <Button onClick={deleteThisFood} className="delete-button m-2">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

FoodCard.propTypes = {
  foodObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    type: PropTypes.number,
    user_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default FoodCard;
