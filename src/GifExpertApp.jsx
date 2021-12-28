import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball Z', 'Drake', 'Rick and Morty']);

  const handleAddCategory = (value) => {
    setCategories([...categories, value]);
  };

  return (
    <>
      <CssBaseline />
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={handleAddCategory} />
      <List>
        {categories.map((category) => (
          <ListItem key={category}>{category}</ListItem>
        ))}
      </List>
    </>
  );
};
