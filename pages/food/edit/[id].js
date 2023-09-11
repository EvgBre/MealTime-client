/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import FoodForm from '../../../components/forms/FoodForm';

export default function EditFood({
  editFoodObj, handleClose, show, afterSubmit,
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
          <FoodForm afterSubmit={afterSubmit} obj={editFoodObj} handleClose={handleSubmitClose} onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

EditFood.propTypes = {
  editFoodObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    foodType: PropTypes.object,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  afterSubmit: PropTypes.func,
};

EditFood.defaultProps = {
  afterSubmit: () => {},
};
