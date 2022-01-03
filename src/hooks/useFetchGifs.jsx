import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getData(category).then((imgs) => {
      setState({ loading: false, data: imgs });
    });
  }, [category]);

  return state;
};
