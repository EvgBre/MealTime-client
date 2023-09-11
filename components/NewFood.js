/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import FoodForm from './forms/FoodForm';

// NEW FOOD MODAL - includes AddFoodForm, Search/Select Food from Spoonacular Component
export default function NewFood({
  handleClose, show, afterSubmit, foodObj,
}) {
  const handleSubmitClose = () => {
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Make a New Food Item!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FoodForm afterSubmit={afterSubmit} obj={foodObj} handleClose={handleSubmitClose} onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

NewFood.propTypes = {
  foodObj: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  afterSubmit: PropTypes.func,
};

NewFood.defaultProps = {
  afterSubmit: () => {},
};
