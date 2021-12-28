import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GifGrid = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=D6gVdyaY26uP8M2Ibq0PcVsjWqJnkK8Z&q=${category}&limit=10`;

  const [images, setImages] = useState([]);

  const getData = async () => {
    const response = await axios(url).catch(console.error);
    const { data } = await response.data;

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {images.map((img) => {
        return <img key={img.id} src={img.url} alt={img.title} />;
      })}
    </div>
  );
};
