import axios from 'axios';

export const getData = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=D6gVdyaY26uP8M2Ibq0PcVsjWqJnkK8Z&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await axios(url).catch(console.error);
  const { data } = await response.data;

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
