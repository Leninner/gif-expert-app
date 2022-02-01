import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';
import PropTypes from 'prop-types';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getData(category).then((imgs) => {
      setState({ loading: false, data: imgs });
    });
  }, [category]);

  return state;
};

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired,
};
