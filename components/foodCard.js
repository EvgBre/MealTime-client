/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteFood } from '../api/foodData';
import NewFood from './NewFood';

function FoodCard({ foodObj, onUpdate, afterSubmit }) {
  const [showFoodModal, setShowFoodModal] = useState(false);

  const deleteThisFood = () => {
    if (window.confirm(`Delete ${foodObj.name}?`)) {
      deleteFood(foodObj.id).then(() => onUpdate());
    }
  };

  const handleClick = () => {
    setShowFoodModal(true);
  };

  const handleCloseBtn = () => {
    setShowFoodModal(false);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={foodObj.image_url} alt={foodObj.name} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>{foodObj.name}</Card.Title>
        <p className="card-text bold">{foodObj.type.label}</p>

        <Button className="food-btn edit-btn" variant="light" onClick={handleClick}>EDIT</Button>
        <NewFood afterSubmit={afterSubmit} foodObj={foodObj} show={showFoodModal} handleClose={handleCloseBtn} />
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
    type: PropTypes.object,
    user_id: PropTypes.object,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  afterSubmit: PropTypes.func,
};

FoodCard.defaultProps = {
  afterSubmit: () => {},
};

export default FoodCard;
