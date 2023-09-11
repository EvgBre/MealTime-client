import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { getFoodsByUser } from '../api/foodData';
import FoodSelectOptions from './FoodSelectOptions';

const initialStateS = {
  name: '',
  type: 0,
  id: 0,
  image_url: '',
  user_id: '',
};

export default function SelectFood({ handleFoodId, selection }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const selectionChange = (val) => {
    const num = Number(val);
    setSelectedValue(num);
  };

  const handleSelectChange = (e) => {
    selectionChange(e.target.value);
  };

  useEffect(() => {
    if (selection) {
      setSelectedValue(selection.id);
      setSearchInput(selection.name);
    }
    handleFoodId(selectedValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    if (searchInput !== '') getFoodsByUser(searchInput).then((data) => data[0]).then(setSearchResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getSearchResults = () => {
    getFoodsByUser(searchInput);
  };
  return (
    <div>
      <Form className="modal-input select-form" id="searchBar" onSubmit={handleSubmit}>
        <input className="form-control" type="text" placeholder="Search..." onChange={handleSearchChange} onSubmit={handleSubmit} value={searchInput} style={{ width: '300px', height: '40px' }} />
        <Button className="select-food-btn" variant="dark">go</Button>
      </Form>
      <Form.Select aria-label="Default select example" onChange={handleSelectChange} onSubmit={handleSubmit} required>
        <option>Select Food</option>
        {searchResults.map((obj) => (
          <FoodSelectOptions key={obj.name} foodObj={obj} onUpdate={getSearchResults} />
        ))}
      </Form.Select>
    </div>
  );
}

SelectFood.propTypes = {
  handleFoodId: PropTypes.func.isRequired,
  selection: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.number,
    user_id: PropTypes.string,
    image_url: PropTypes.string,
  }),
};

SelectFood.defaultProps = {
  selection: initialStateS,
};
