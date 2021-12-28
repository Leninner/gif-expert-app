import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue && setCategories(inputValue);
    setInputValue('');
  };

  return (
    <form className='divito' onSubmit={handleSubmit}>
      <TextField label='Category' focused onChange={handleInputChange} value={inputValue} />
      <Button variant='contained' type='submit'>
        Add Category
      </Button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
