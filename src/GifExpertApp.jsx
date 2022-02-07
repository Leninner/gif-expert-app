import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { List } from '@mui/material';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultState = [] }) => {
  const [categories, setCategories] = useState(defaultState);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  return (
    <>
      <CssBaseline />
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={handleAddCategory} />
      <List>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </List>
    </>
  );
};
