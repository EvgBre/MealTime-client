import React from 'react';
import PropTypes from 'prop-types';

export default function FoodSelectOptions({ foodObj }) {
  return (
    <option value={foodObj.id}>{foodObj.name}</option>
  );
}

FoodSelectOptions.propTypes = {
  foodObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
