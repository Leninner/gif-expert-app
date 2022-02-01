import React from 'react';
import { GifGridItem } from './GifGridItem';
import Grid from '@mui/material/Grid';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ flexGrow: 0 }}>
        {loading && <h2>Loading...</h2>}
        {images.map((img) => (
          <Grid item xs={2} sm={4} md={4} key={img.id}>
            <GifGridItem {...img} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
